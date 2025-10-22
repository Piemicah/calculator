import BigButton from "@/components/BigButton";
import BottomSheetList, {
  BottomSheetListRef,
} from "@/components/BottomSheetList";

import DisplayScreen from "@/components/DisplayScreen";
import Hyperbolic, { HypeItemProps } from "@/components/Hyperbolic";
import MathQuillEditor, {
  MathQuillEditorRef,
} from "@/components/MathQuillEditor";
import NormalButton from "@/components/NormalButton";
import SmallButton from "@/components/SmallButton";
import { Colors } from "@/constants/Colors";
import { useMemory } from "@/hooks/memoryContext";
import { useTheme } from "@/hooks/themeContext";
import useOrientation from "@/hooks/useOrientation";
import { conversions, scientificConstants } from "@/util/data";
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
  const [hypPressed, setHypPressed] = useState<boolean>(false);

  const [answer, setAnswer] = useState<string>("");
  const [ansMemory, setAnsMemory] = useState<string>("0");
  const [degrees, setDegrees] = useState<boolean>(true);
  const [latex, setLatex] = useState<string>("");
  const mathRef = useRef<MathQuillEditorRef>(null);

  const constantSheetRef = useRef<BottomSheetListRef>(null);
  const conversionSheetRef = useRef<BottomSheetListRef>(null);

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
    "CONV",
    "hyp",
    "M+",
    "M-",
    "CLR ALL",
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
      .replace(/\\sinh\^\(-1\)\(([\S]+)\)/g, "asinh($1)")
      .replace(/\\sin/g, "sin")
      .replace(/\\cosh\^\(-1\)\(([\S]+)\)/g, "acosh($1)")
      .replace(/\\cos\^\(-1\)\(([\S]+)\)/g, "acos($1)")
      .replace(/\\cosh/g, "cosh")
      .replace(/\\cos/g, "cos")
      .replace(/\\tan\^\(-1\)\(([\S]+)\)/g, "atan($1)")
      .replace(/\\tanh\^\(-1\)\(([\S]+)\)/g, "atanh($1)")
      .replace(/\\tan/g, "tan")
      .replace(/\\coth\^\(-1\)\(([\S]+)\)/g, "acoth($1)")
      .replace(/\\coth/g, "coth")
      .replace(/\\operatorname\(sech\)\^\(-1\)\(([\S]+)\)/g, "asech($1)")
      .replace(/\\operatorname\(csch\)\^\(-1\)\(([\S]+)\)/g, "acsch($1)")
      .replace(/\\operatorname\(sech\)/g, "sech")
      .replace(/\\operatorname\(csch\)/g, "csch")
      .replace(
        /\\frac\(d\(([^,]+),([^)]+)\)\)\(dx\)/g,
        "derivative('$1','x').evaluate({x:$2})"
      )
      .replace(/\\frac\(d\(([\S]+)\)\)\(dx\)/g, "derivative('$1','x')")
      .replace(/\\frac\(([\S]+)\)\(([\S]+)\)/g, "(($1)/($2))")

      .replace(
        /\\int_([\d]+)\^([\d]+)([\S]+)dx/g,
        "(integrate('$3','x',$1,$2))"
      )
      .replace(/Pol\((\d+),(\d+)\)/g, "polar($1,$2)")
      .replace(/Rec\((\d+),(\d+)\)/g, "rec($1,$2)")
      .replace(/([\d]+)\\angle([\d]+)/g, "$1*cos($2)+i*$1*sin($2)")

      // ✅ Replace "Ans" first before single-letter memory keys
      .replace(/\bAns\b/g, `${ansMemory}`)
      .replace(/GCD/g, "gcd")
      .replace(/LCM/g, "lcm")
      .replace(/\\infty/g, "(Infinity)")

      // ✅ Use word boundaries (\b) for isolated letters
      .replace(/\bA\b/g, `(${memory.A})`)
      .replace(/\bB\b/g, `(${memory.B})`)
      .replace(/\bC\b/g, `(${memory.C})`)
      .replace(/\bD\b/g, `(${memory.D})`)
      .replace(/\bE\b/g, `(${memory.E})`)
      .replace(/\bF\b/g, `(${memory.F})`)
      .replace(/\bX\b/g, `(${memory.X})`)
      .replace(/\bY\b/g, `(${memory.Y})`)
      .replace(/\bM\b/g, `(${memory.M})`)
      .replace(/\\%/g, "%")
      .replace(/in►cm/g, "(2.54)")
      .replace(/cm►in/g, "(0.3937007874)")
      .replace(/ft►m/g, "(0.3048)")
      .replace(/m►ft/g, "(3.280839895)")
      .replace(/yd►m/g, "(0.9144)")
      .replace(/m►yd/g, "(1.0936132983)")
      .replace(/mi►km/g, "(1.609344)")
      .replace(/km►mi/g, "(0.6213711922)")
      .replace(/mm►in/g, "(0.0393700787)")
      .replace(/in►mm/g, "(25.4)")
      .replace(/cm►m/g, "(0.01)")
      .replace(/m►cm/g, "(100)")
      .replace(/km►m/g, "(1000)")
      .replace(/m►km/g, "(0.001)")

      // 🟩 AREA
      .replace(/m\^2►ft\^2/g, "(10.7639104167)")
      .replace(/ft\^2►m\^2/g, "(0.09290304)")
      .replace(/cm\^2►in\^2/g, "(0.15500031)")
      .replace(/in\^2►cm\^2/g, "(6.4516)")
      .replace(/km\^2►mi\^2/g, "(0.3861021585)")
      .replace(/mi\^2►km\^2/g, "(2.5899881103)")
      .replace(/acre►m\^2/g, "(4046.8564224)")
      .replace(/m\^2►acre/g, "(0.0002471054)")
      .replace(/hectare►m\^2/g, "(10000)")
      .replace(/m\^2►hectare/g, "(0.0001)")

      // 🟨 VOLUME
      .replace(/L►mL/g, "(1000)")
      .replace(/mL►L/g, "(0.001)")
      .replace(/L►gal\(US\)/g, "(0.2641720524)")
      .replace(/gal\(US\)►L/g, "(3.785411784)")
      .replace(/L►qt\(US\)/g, "(1.05668821)")
      .replace(/qt\(US\)►L/g, "(0.946352946)")
      .replace(/L►fl oz\(US\)/g, "(33.8140227)")
      .replace(/fl oz\(US\)►L/g, "(0.0295735296)")
      .replace(/m\^3►L/g, "(1000)")
      .replace(/L►m\^3/g, "(0.001)")

      // 🟥 MASS / WEIGHT
      .replace(/kg►g/g, "(1000)")
      .replace(/g►kg/g, "(0.001)")
      .replace(/kg►lb/g, "(2.2046226218)")
      .replace(/lb►kg/g, "(0.45359237)")
      .replace(/g►oz/g, "(0.0352739619)")
      .replace(/oz►g/g, "(28.349523125)")
      .replace(/ton\(US\)►kg/g, "(907.18474)")
      .replace(/kg►ton\(US\)/g, "(0.0011023113)")
      .replace(/tonne►kg/g, "(1000)")
      .replace(/kg►tonne/g, "(0.001)")

      // 🟧 SPEED
      .replace(/m\/s►km\/h/g, "(3.6)")
      .replace(/km\/h►m\/s/g, "(0.277777778)")
      .replace(/m\/s►mph/g, "(2.23693629)")
      .replace(/mph►m\/s/g, "(0.44704)")
      .replace(/km\/h►mph/g, "(0.6213711922)")
      .replace(/mph►km\/h/g, "(1.609344)")

      // 🟪 PRESSURE
      .replace(/kPa►Pa/g, "(1000)")
      .replace(/kPa►bar/g, "(0.01)")
      .replace(/kPa►atm/g, "(0.0098692327)")
      .replace(/Pa►kPa/g, "(0.001)")
      .replace(/bar►kPa/g, "(100)")
      .replace(/bar►psi/g, "(14.5037738)")
      .replace(/psi►bar/g, "(0.0689475729)")
      .replace(/atm►kPa/g, "(101.325)")

      // 🟫 ENERGY
      .replace(/J►kJ/g, "(0.001)")
      .replace(/kJ►J/g, "(1000)")
      .replace(/J►cal/g, "(0.2390057361)")
      .replace(/cal►J/g, "(4.184)")
      .replace(/kcal►kJ/g, "(4.184)")
      .replace(/kJ►kcal/g, "(0.2390057361)")
      .replace(/Wh►J/g, "(3600)")
      .replace(/J►Wh/g, "(0.0002777778)")
      .replace(/kWh►MJ/g, "(3.6)")
      .replace(/MJ►kWh/g, "(0.277777778)")
      .replace(/([\S]+)P([\S]+)/g, "(permutations($1,$2))")
      .replace(/([\S]+)C([\S]+)/g, "(combinations($1,$2))");

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
          case "AC": {
            mathRef.current?.clear();
            setAnswer("");
            break;
          }
          case "DEL": {
            mathRef.current?.deleteLeft();
            break;
          }

          case "=": {
            const expr = latexToExpression(latex);
            const ans = math.evaluate(expr);

            setAnswer(String(ans));
            setAnsMemory(String(ans));
            break;
          }
          case "◀":
          case "▶": {
            if (label === "◀") mathRef.current?.moveLeft(1);
            else mathRef.current?.moveRight(1);
            break;
          }

          case "STO": {
            setStoPressed(true);
            setRclPressed(false);
            break;
          }

          case "RCL": {
            setRclPressed(true);
            setStoPressed(false);
            break;
          }

          case "CONS": {
            constantSheetRef.current?.open();
            break;
          }
          case "CONV": {
            conversionSheetRef.current?.open();
            break;
          }

          case "hyp": {
            setHypPressed(!hypPressed);
            break;
          }

          case "M+":
          case "M-": {
            const ex = latexToExpression(latex);
            let an = 0;
            if (ex) {
              if (label === "M+")
                an = Number(memory.M) + Number(math.evaluate(ex));
              else an = Number(memory.M) - Number(math.evaluate(ex));
              setMemory && setMemory({ ...memory, M: an.toString() });
              setAnswer(`${an}-->M`);
            }

            break;
          }

          case "CLR ALL": {
            const memo = { ...memory };
            (Object.keys(memo) as (keyof typeof memo)[]).forEach((key) => {
              memo[key] = "0";
            });
            setMemory && setMemory(memo);
            setAnswer("Memory Cleared!");
            break;
          }
        }
      } else {
        if (stoPressed && keys[key].alpha) {
          const expr = latexToExpression(latex);
          const ans = math.evaluate(expr);
          if (ans) {
            setMemory && setMemory({ ...memory, [keys[key].alpha]: ans });
            setAnswer(`${ans}-->${keys[key].alpha}`);
          }
        } else if (rclPressed && keys[key].alpha) {
          const mm = memory[keys[key].alpha as keyof typeof memory];
          setAnswer(mm);

          mathRef.current?.insert(label);
        } else mathRef.current?.insert(label);
        setRclPressed(false);
        setStoPressed(false);
        setHypPressed(false);
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

  const constantItemPressed = (item: any) => {
    const value = item.value;
    mathRef.current?.insert(value);
  };

  const conversionItemPressed = (item: any) => {
    const value = item.label;
    mathRef.current?.insert(value);
  };

  const getHypItem = (item: HypeItemProps) => {
    mathRef.current?.insert(item.value);
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
          {hypPressed && (
            <Text className={`${optionTxtColor}  text-[11px] font-bold`}>
              H
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
          {/* <View className="flex-col flex-1 mb-2 bg-red-500">
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
            <SmallButton
              label="Alpha"
              fxn={() => {
                setAlphaPressed(!alphaPressed);
                setShiftPressed(false);
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
                color={
                  typeof Colors[theme as keyof typeof Colors] === "object" &&
                  Colors[theme as keyof typeof Colors] !== null
                    ? (
                        Colors[theme as keyof typeof Colors] as {
                          bigButton: string;
                        }
                      ).bigButton
                    : "#000"
                }
              />
            </TouchableOpacity>

            <NormalButton label="MODE" />
            <NormalButton label="x" fxn={btnClicked} />
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
              <SmallButton label="( - )" cap1="∠" mid="A" fxn={btnClicked} />
              <SmallButton label="° ' ' '" cap1="&#x27F5;" mid="B" />
              <SmallButton label="hyp" mid="C" fxn={btnClicked} />
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
            <BigButton label="7" mid="M" fxn={btnClicked} />
            <BigButton label="8" mid="G" fxn={btnClicked} />
            <BigButton label="9" mid="T" fxn={btnClicked} />
            <BigButton label="DEL" mid="" fxn={btnClicked} />
            <BigButton label="AC" mid="CLR ALL" fxn={btnClicked} />
          </View>
          <View className="flex-row justify-between w-full">
            <BigButton label="4" cap2="[MAT]" mid="µ" fxn={btnClicked} />
            <BigButton label="5" cap2="[VCT]" mid="m" fxn={btnClicked} />
            <BigButton label="6" mid="k" fxn={btnClicked} />
            <BigButton label="×" mid="nPr" cap2="GCD" fxn={btnClicked} />
            <BigButton label="÷" mid="nCr" cap2="LCM" fxn={btnClicked} />
          </View>
          <View className="flex-row justify-between w-full">
            <BigButton label="1" cap2="[S-SUM]" mid="f" fxn={btnClicked} />
            <BigButton label="2" cap2="[S-VAR]" mid="p" fxn={btnClicked} />
            <BigButton label="3" cap2="[DISTR]" mid="n" fxn={btnClicked} />
            <BigButton label="+" cap2="[r∠θ]" cap1="Pol(" fxn={btnClicked} />
            <BigButton label="-" cap2="[a+bi]" cap1="Rec(" fxn={btnClicked} />
          </View>
          <View className="flex-row justify-between w-full">
            <BigButton label="0" mid="Rnd" fxn={btnClicked} />
            <BigButton label="•" mid="Ran#" fxn={btnClicked} />
            <BigButton label="EXP" mid="π" cap2="∞" fxn={btnClicked} />
            <BigButton label="Ans" cap1="DRG>" fxn={btnClicked} />
            <BigButton label="=" cap2="[Re-Im]" cap1="%" fxn={btnClicked} />
          </View>
        </View>
      </View>
      <BottomSheetList
        data={scientificConstants}
        title="Constants"
        ref={constantSheetRef}
        onPress={constantItemPressed}
        isConstants={true}
      />

      <BottomSheetList
        data={conversions}
        title="Metric Coversion"
        ref={conversionSheetRef}
        onPress={conversionItemPressed}
        isConstants={false}
      />

      {hypPressed && (
        <Hyperbolic setHypPressed={setHypPressed} getHypItem={getHypItem} />
      )}
    </SafeAreaView>
  );
}
