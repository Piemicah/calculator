import BigButton from "@/components/BigButton";
import DisplayScreen from "@/components/DisplayScreen";
import MathQuillEditor, {
  MathQuillEditorRef,
} from "@/components/MathQuillEditor";
import NormalButton from "@/components/NormalButton";
import OptionDisplay from "@/components/OptionDisplay";
import SmallButton from "@/components/SmallButton";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/hooks/themeContext";
import useOrientation from "@/hooks/useOrientation";
import { keys, shiftFunctions } from "@/util/keypads";
import { Ionicons } from "@expo/vector-icons";
import { all, create } from "mathjs";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { theme, setTheme } = useTheme();
  const { isLandscape } = useOrientation();
  const [shiftPressed, setShiftPressed] = useState<boolean>(false);
  const [alphaPressed, setAlphaPressed] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [displayExpression, setDisplayExpression] = useState<string>("");
  const [internalExpression, setInternalExpression] = useState<string>("");
  const [answer, setAnswer] = useState<string>("0");
  const [ansMemory, setAnsMemory] = useState<string>("0");
  const [degrees, setDegrees] = useState<boolean>(true);
  const [latex, setLatex] = useState<string>("");
  const mathRef = useRef<MathQuillEditorRef>(null);

  const bgColor = `bg-${theme}-panel`;
  const optionTxtColor = `text-${theme}-bigButton`;

  const math = create(all);

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

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const specialBtns = ["DEL", "AC", "="];

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
      .replace(/\\cos\(([\S]+)\)/g, "cos(($1) deg)")
      .replace(/\\tan\(([\S]+)\)/g, "tan(($1) deg)")
      .replace(/Ans/g, `${ansMemory}`);
    return expression;
  };
  const btnClicked = (label: string) => {
    const shiftFunctionsKeys: string[] = Object.keys(shiftFunctions);

    label =
      shiftPressed && shiftFunctionsKeys.includes(label)
        ? shiftFunctions[label]
        : label;
    try {
      if (specialBtns.includes(label)) {
        switch (label) {
          case "AC":
            mathRef.current?.clear();
            setAnswer("0");
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
        }
      } else {
        mathRef.current?.insert(keys[label].latex ?? label);
      }

      // Scientific shiftFunctions

      if (shiftPressed && shiftFunctionsKeys.includes(label)) {
        const multi = shiftFunctions[label];
        setDisplayExpression(displayExpression + (keys[multi].latex ?? multi));
        // setInternalExpression(internalExpression + keys[multi].value);
      }
    } catch (error: any) {
      setAnswer("Math error!");
    } finally {
      setShiftPressed(false);
      setAlphaPressed(false);
    }
  };

  const directionKeyClicked = (label: string) => {
    // mathRef.current?.focus();
    if (label === "◀") mathRef.current?.moveLeft(1);
    else mathRef.current?.moveRight(1);
  };

  console.log({ expr: latexToExpression(latex) });
  console.log({ latex });

  return (
    <SafeAreaView
      className={`flex-1 justify-between items-center ${bgColor} ${isLandscape ? "pt-0 px-3" : "pt-10 px-2"}`}
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
            <TouchableOpacity onPress={handleModal}>
              <Ionicons
                name="options-outline"
                size={32}
                color={`${Colors[theme as keyof typeof Colors].bigButton}`}
              />
            </TouchableOpacity>

            <OptionDisplay
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />

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
              <SmallButton label="∫dx" cap1="d/dx" mid=":" />
              <SmallButton label="◀" cap1=" " fxn={directionKeyClicked} />
              <SmallButton label="▶" cap1=" " fxn={directionKeyClicked} />
              <SmallButton label="x¯¹" cap1="x!" mid="LOGIC" fxn={btnClicked} />
              <SmallButton label="CONS" cap2="CONV" />
            </View>
            <View className="flex-row justify-between w-full">
              <SmallButton label="a b/c" cap1="d/c" />
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
              <SmallButton label="RCL" cap1="STO" />
              <SmallButton
                label="ENG"
                cap1="&#x27F5;"
                cap2="i"
                fxn={btnClicked}
              />
              <SmallButton label="(" cap1="[arg]" fxn={btnClicked} />
              <SmallButton label=")" cap1="[Abs]" mid="X" fxn={btnClicked} />
              <SmallButton label="," cap1=";" mid="Y" />
              <SmallButton label="M+" cap1="M-" mid="M" />
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
            <BigButton label="AC" mid="OFF" fxn={btnClicked} />
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
