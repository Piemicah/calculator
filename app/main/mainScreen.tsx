import BigButton from "@/components/BigButton";
import DisplayScreen from "@/components/DisplayScreen";
import MathQuillEditor, {
  MathQuillEditorRef,
} from "@/components/MathQuillEditor";
import NormalButton from "@/components/NormalButton";
import SmallButton from "@/components/SmallButton";
import { Colors } from "@/constants/Colors";
import { useMemory } from "@/hooks/memoryContext";
import { useTheme } from "@/hooks/themeContext";
import useOrientation from "@/hooks/useOrientation";
import { keys } from "@/util/keypads";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { all, create } from "mathjs";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainScreen() {
  const { theme, setTheme } = useTheme();
  const { memory, setMemory } = useMemory();
  const { isLandscape } = useOrientation();
  const [shiftPressed, setShiftPressed] = useState<boolean>(false);
  const [alphaPressed, setAlphaPressed] = useState<boolean>(false);
  const [stoPressed, setStoPressed] = useState<boolean>(false);
  const [rclPressed, setRclPressed] = useState<boolean>(false);

  const [answer, setAnswer] = useState<string>("0");
  const [ansMemory, setAnsMemory] = useState<string>("0");
  const [degrees, setDegrees] = useState<boolean>(true);
  const [latex, setLatex] = useState<string>("");
  const mathRef = useRef<MathQuillEditorRef>(null);

  const navigation = useNavigation();

  const bgColor = `bg-${theme}-panel`;
  const optionTxtColor = `text-${theme}-bigButton`;

  const math = create(all);

  const polar = (x: number, y: number): string => {
    const radius = math.sqrt(x * x + y * y) as number;
    const arg = math.atan(y / x);
    return `${radius.toFixed(4)}∠${arg.toFixed(4)}`;
  };

  const rec = (r: number, arg: number): string => {
    const x = r * math.cos(arg);
    const y = r * math.sin(arg);
    return `x=${x.toFixed(4)},y=${y.toFixed(4)}`;
  };

  math.import({
    integrate: (
      expr: string,
      variable: string,
      a: number,
      b: number,
      n = 1000
    ) => {
      const h = (b - a) / n;
      let sum = 0;
      for (let i = 0; i <= n; i++) {
        const x = a + i * h;
        const fx = math.evaluate(expr, { [variable]: x });
        sum += (i === 0 || i === n ? 1 : i % 2 === 0 ? 2 : 4) * fx;
      }
      return (h / 3) * sum; // Simpson’s rule
    },
    polar,
    rec,
  });

  // override with degree-based versions
  if (degrees) {
    // keep references to the original radian functions
    const sinRad = math.sin;
    const cosRad = math.cos;
    const tanRad = math.tan;
    const asinRad = math.asin;
    const acosRad = math.acos;
    const atanRad = math.atan;

    math.import(
      {
        // forward trig (expects degrees)
        sin: (x: number) => sinRad(math.unit(x, "deg")),
        cos: (x: number) => cosRad(math.unit(x, "deg")),
        tan: (x: number) => tanRad(math.unit(x, "deg")),

        asin: (x: number) => math.unit(asinRad(x), "rad").toNumber("deg"),
        acos: (x: number) => math.unit(acosRad(x), "rad").toNumber("deg"),
        atan: (x: number) => math.unit(atanRad(x), "rad").toNumber("deg"),
      },
      { override: true }
    );
  }

  const specialBtns = [
    "DEL",
    "AC",
    "=",
    "◀",
    "▶",
    "ENG",
    "STO",
    "RCL",
    "CONS",
  ];

  const latexToExpression = (latex: string): string => {
    const expression = latex
      .replace(/{/g, "(")
      .replace(/}/g, ")")
      .replace(/\\times/g, "*")
      .replace(/\\div/g, "/")
      .replace(/\\log/g, "log10")
      .replace(/\\ln/g, "log")
      .replace(/\\pi/g, "pi")
      .replace(/\\sqrt\[3\]/g, "cbrt")
      .replace(/\\sqrt\[(\d+)\]\((\d+)\)/g, "$2^(1/$1)")
      .replace(/\\sqrt/g, "sqrt")
      .replace(/\\sin\^\(-1\)\(([\S]+)\)/g, "asin($1)")
      .replace(/\\sin/g, "sin")
      .replace(/\\cos\^\(-1\)\(([\S]+)\)/g, "acos($1)")
      .replace(/\\cos/g, "cos")
      .replace(/\\tan\^\(-1\)\(([\S]+)\)/g, "atan($1)")
      .replace(/\\tan/g, "tan")
      .replace(/\\frac\(([\S]+)\)\(([\S]+)\)/g, "(($1)/($2))")
      .replace(/([\S]+)P([\S]+)/g, "(permutations($1,$2))")
      .replace(/([\S]+)C([\S]+)/g, "(combinations($1,$2))")
      .replace(
        /\\int_([\d]+)\^([\d]+)([\S]+)d([a-zA-Z])/g,
        "(integrate('$3','$4',$1,$2))"
      )
      .replace(/Pol\((\d+),(\d+)\)/g, "polar($1,$2)")
      .replace(/Rec\((\d+),(\d+)\)/g, "rec($1,$2)")

      .replace(/A/g, `(${memory.A})`)
      .replace(/B/g, `(${memory.B})`)
      .replace(/C/g, `(${memory.C})`)
      .replace(/D/g, `(${memory.D})`)
      .replace(/E/g, `(${memory.E})`)
      .replace(/F/g, `(${memory.F})`)
      .replace(/X/g, `(${memory.X})`)
      .replace(/Y/g, `(${memory.Y})`)
      .replace(/M/g, `(${memory.M})`)
      .replace(/Ans/g, `${ansMemory}`);
    return expression;
  };
  const btnClicked = async (key: string) => {
    const label = (
      shiftPressed && keys[key].shift
        ? keys[key].shift
        : (alphaPressed && keys[key].alpha) || (rclPressed && keys[key].alpha)
          ? keys[key].alpha
          : keys[key].value
    ) as string;
    console.log(label);
    try {
      if (specialBtns.includes(label)) {
        switch (label) {
          case "AC":
            mathRef.current?.clear();
            setAnswer("");
            break;
          case "DEL":
            mathRef.current?.deleteLeft();
            break;

          case "=":
            const expr = latexToExpression(latex);
            const ans = math.evaluate(expr);

            setAnswer(String(ans));
            setAnsMemory(String(ans));
            break;

          case "◀":
          case "▶":
            if (key === "◀") mathRef.current?.moveLeft(1);
            else mathRef.current?.moveRight(1);
            break;

          case "STO":
            setStoPressed(true);
            setRclPressed(false);
            break;

          case "RCL":
            setRclPressed(true);
            setStoPressed(false);
            break;

          case "CONS":
            break;
        }
      } else {
        if (stoPressed && keys[key].alpha) {
          const expr = latexToExpression(latex);
          const ans = math.evaluate(expr);
          setMemory && setMemory({ ...memory, [keys[key].alpha]: ans });
          setAnswer(`${ans}-->${keys[key].alpha}`);
        } else if (rclPressed && keys[key].alpha) {
          const mm = memory[keys[key].alpha as keyof typeof memory];
          setAnswer(mm);

          mathRef.current?.insert(label);
        } else mathRef.current?.insert(label);
        setRclPressed(false);
        setStoPressed(false);
      }
    } catch (error: any) {
      setAnswer("Math Error!");
      console.log(error);
    } finally {
      setShiftPressed(false);
      setAlphaPressed(false);
      // setRclPressed(false);
    }
  };

  console.log({ expr: latexToExpression(latex) });
  console.log({ latex });

  return (
    <SafeAreaView
      className={`flex-1 justify-between items-center ${bgColor} ${isLandscape ? "pt-0 px-3" : "pt-10 px-2"} relative`}
    >
      <View className="w-full">
        <View className="flex-row justify-start w-full gap-4 pl-2 mb-1">
          {shiftPressed && (
            <Text className={`${optionTxtColor}  text-[11px] font-bold`}>
              S
            </Text>
          )}
          {alphaPressed && (
            <Text className={`${optionTxtColor}  text-[11px] font-bold`}>
              A
            </Text>
          )}
          {stoPressed && (
            <Text className={`${optionTxtColor}  text-[11px] font-bold`}>
              STO
            </Text>
          )}
          {rclPressed && (
            <Text className={`${optionTxtColor}  text-[11px] font-bold`}>
              RCL
            </Text>
          )}
          <Text className={`${optionTxtColor}  text-[11px] font-bold`}>
            NORM
          </Text>
          <Text className={`${optionTxtColor}  text-[11px] font-bold`}>
            MATH
          </Text>
          <Text className={`${optionTxtColor}  text-[11px] font-bold`}>
            DECI
          </Text>
          <TouchableOpacity
            onPress={() => {
              setDegrees(!degrees);
            }}
          >
            <Text className={`${optionTxtColor}  text-[11px] font-bold`}>
              {degrees ? "DEG" : "RAD"}
            </Text>
          </TouchableOpacity>
        </View>

        <DisplayScreen>
          <MathQuillEditor ref={mathRef} initialLatex="" onChange={setLatex} />
          {/* <View className="flex flex-1 mb-2 bg-red-500">
            <MathQuillEditor initialLatex={answer} onChange={() => {}} />
          </View> */}
          <Text className="text-[18px] text-right">{answer}</Text>
        </DisplayScreen>
      </View>
      <View
        className={`${isLandscape ? "flex-row gap-3 items-end" : "flex-col"}`}
      >
        <View
          className={`flex-col justify-center ${isLandscape ? "flex-1" : ""}`}
        >
          {/* top buttons */}
          <View className="flex flex-row items-center justify-between w-full">
            <SmallButton
              label="Shift"
              fxn={() => {
                setShiftPressed(!shiftPressed);
                setAlphaPressed(false);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
            >
              <Ionicons
                name="options-outline"
                size={32}
                color={`${Colors[theme as keyof typeof Colors].bigButton}`}
              />
            </TouchableOpacity>

            <NormalButton label="" />
            <NormalButton label="" />
            <SmallButton
              label="Alpha"
              fxn={() => {
                setAlphaPressed(!alphaPressed);
                setShiftPressed(false);
              }}
            />
          </View>
          {/* small buttons */}
          <View className={`flex-col ${isLandscape ? "gap-0" : "gap-2"}`}>
            <View className="flex-row justify-between w-full">
              <SmallButton label="CALC" cap1="SOLVE" mid="=" />
              <SmallButton label="∫dx" cap1="d/dx" mid=":" fxn={btnClicked} />
              <SmallButton label="◀" cap1=" " fxn={btnClicked} />
              <SmallButton label="▶" cap1=" " fxn={btnClicked} />
              <SmallButton label="x¯¹" cap1="x!" mid="LOGIC" fxn={btnClicked} />
              <SmallButton label="CONS" cap2="CONV" fxn={btnClicked} />
            </View>
            <View className="flex-row justify-between w-full">
              <SmallButton label="a b/c" cap1="d/c" fxn={btnClicked} />
              <SmallButton label="√" cap1="∛" fxn={btnClicked} />
              <SmallButton label="x²" cap1="x³" mid="DEC" fxn={btnClicked} />
              <SmallButton label="xⁿ" cap1="ˣ√" mid="HEX" fxn={btnClicked} />
              <SmallButton label="log" cap1="10ˣ" mid="BIN" fxn={btnClicked} />
              <SmallButton label="ln" cap1="eˣ" mid="OCT" fxn={btnClicked} />
            </View>
            <View className="flex-row justify-between w-full">
              <SmallButton label="( - )" cap1="[∠]" mid="A" />
              <SmallButton label="° ' ' '" cap1="&#x27F5;" mid="B" />
              <SmallButton label="hyp" mid="C" />
              <SmallButton label="sin" cap1="sin¯¹" mid="D" fxn={btnClicked} />
              <SmallButton label="cos" cap1="cos¯¹" mid="E" fxn={btnClicked} />
              <SmallButton label="tan" cap1="tan¯¹" mid="F" fxn={btnClicked} />
            </View>
            <View className="flex-row justify-between w-full">
              <SmallButton label="RCL" cap1="STO" fxn={btnClicked} />
              <SmallButton
                label="ENG"
                cap1="&#x27F5;"
                cap2="i"
                fxn={btnClicked}
              />
              <SmallButton label="(" cap1="[" fxn={btnClicked} />
              <SmallButton label=")" cap1="]" mid="X" fxn={btnClicked} />
              <SmallButton label="," cap1=";" mid="Y" fxn={btnClicked} />
              <SmallButton label="M+" cap1="M-" mid="M" fxn={btnClicked} />
            </View>
          </View>
        </View>
        {/* big buttons */}
        <View
          className={`flex-col justify-center ${isLandscape ? "flex-1" : ""}`}
        >
          <View className="flex-row justify-between w-full">
            <BigButton label="7" cap1="" cap2="M" fxn={btnClicked} />
            <BigButton label="8" cap2="G" fxn={btnClicked} />
            <BigButton label="9" cap2="T" fxn={btnClicked} />
            <BigButton label="DEL" mid="INS" fxn={btnClicked} />
            <BigButton label="AC" mid="CLR ALL" fxn={btnClicked} />
          </View>
          <View className="flex-row justify-between w-full">
            <BigButton label="4" cap1="[MAT]" cap2="µ" fxn={btnClicked} />
            <BigButton label="5" cap1="[VCT]" cap2="m" fxn={btnClicked} />
            <BigButton label="6" cap2="k" fxn={btnClicked} />
            <BigButton label="×" mid="nPr" fxn={btnClicked} />
            <BigButton label="÷" mid="nCr" fxn={btnClicked} />
          </View>
          <View className="flex-row justify-between w-full">
            <BigButton label="1" cap1="[S-SUM]" cap2="f" fxn={btnClicked} />
            <BigButton label="2" cap1="[S-VAR]" cap2="p" fxn={btnClicked} />
            <BigButton label="3" cap1="[DISTR]" cap2="n" fxn={btnClicked} />
            <BigButton label="+" cap1="[r∠θ]" cap2="Pol(" fxn={btnClicked} />
            <BigButton label="-" cap1="[a+bi]" cap2="Rec(" fxn={btnClicked} />
          </View>
          <View className="flex-row justify-between w-full">
            <BigButton label="0" mid="Rnd" fxn={btnClicked} />
            <BigButton label="•" mid="Ran#" fxn={btnClicked} />
            <BigButton label="EXP" mid="π" fxn={btnClicked} />
            <BigButton label="Ans" cap1="DRG>" fxn={btnClicked} />
            <BigButton label="=" cap1="[Re-Im]" cap2="%" fxn={btnClicked} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
