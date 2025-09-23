import BigButton from "@/components/BigButton";
import DisplayScreen from "@/components/DisplayScreen";
import NormalButton from "@/components/NormalButton";
import OptionDisplay from "@/components/OptionDisplay";
import SmallButton from "@/components/SmallButton";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/hooks/themeContext";
import useOrientation from "@/hooks/useOrientation";
import { keys } from "@/util/keypads";
import { Ionicons } from "@expo/vector-icons";
import * as math from "mathjs";
import { useState } from "react";
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
  const [openBrackets, setOpenBrackets] = useState(0);
  const [functionStack, setFunctionStack] = useState<boolean[]>([]); // Track if open parenthesis is from a function

  const bgColor = `bg-${theme}-panel`;
  const optionTxtColor = `text-${theme}-bigButton`;

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const specialBtns = ["DEL", "AC", "Ans", "="];
  const multipliers: Record<string, string> = {
    "1": "f",
    "2": "p",
    "3": "n",
    "4": "µ",
    "5": "m",
    "6": "k",
    "7": "M",
    "8": "G",
    "9": "T",
    ENG: "i",
  };

  const getClosingLatex = (expr: string): string => {
    const functionKeywords = ["sqrt(", "sin(", "cos(", "tan(", "log(", "ln("];

    for (let fn of functionKeywords) {
      if (expr.endsWith(fn) || (expr.includes(fn) && !expr.includes(")"))) {
        return ")}"; // Close the LaTeX block
      }
    }
    return ")"; // Default case: normal parenthesis
  };

  const btnClicked = (label: string) => {
    try {
      if (specialBtns.includes(label)) {
        switch (label) {
          case "AC":
            setDisplayExpression("");
            setAnswer("0");
            setInternalExpression("");
            setOpenBrackets(0);
            break;
          case "DEL":
            setDisplayExpression(displayExpression.slice(0, -1));
            setInternalExpression(internalExpression.slice(0, -1));
            break;
          case "=":
            const formatedInternalExpression = getFormattedInternalExpression();
            const ans = math.evaluate(
              formatedInternalExpression
                .replace(/Ans/g, ansMemory)
                .replace(/sin(([^)]+))/g, "sin(($1) deg)")
                .replace(/cos\(([^)]+)\)/g, "cos(($1) deg)")
                .replace(/tan\(([^)]+)\)/g, "tan(($1) deg)")
            );

            setAnswer(String(ans));
            setAnsMemory(String(ans));
            break;

          case "Ans":
            setDisplayExpression((prev) => prev + "Ans");
            setInternalExpression(internalExpression + "Ans");
            break;
        }
      } else {
        if (label === ")") {
          if (openBrackets > 0) {
            // const isFunction = functionStack[functionStack.length - 1] || false;
            const closingLatex = getClosingLatex(internalExpression);
            console.log(closingLatex);
            setDisplayExpression((prev) => prev + closingLatex);
            setInternalExpression(internalExpression + ")");
            setOpenBrackets((prev) => prev - 1);
            setFunctionStack((prev) => prev.slice(0, -1)); // Remove the last function flag
          }
        } else {
          if (keys[label].isFunction) {
            setDisplayExpression((prev) => prev + (keys[label].latex ?? label));
            setInternalExpression((prev) => prev + keys[label].value);
            setOpenBrackets((prev) => prev + 1);
            setFunctionStack((prev) => [...prev, true]); // Mark as function parenthesis
          } else {
            setDisplayExpression((prev) => prev + (keys[label].latex ?? label));
            setInternalExpression(internalExpression + keys[label].value);
            if (keys[label].value === "(") {
              setOpenBrackets((prev) => prev + 1);
              setFunctionStack((prev) => [...prev, false]); // Mark as regular parenthesis
            }
          }
        }
      }

      // Scientific Multipliers
      const multipliersKeys = Object.keys(multipliers);

      if (shiftPressed && multipliersKeys.includes(label)) {
        const multi = multipliers[label];
        console.log(multi);
        setDisplayExpression(displayExpression + (keys[multi].latex ?? multi));
        setInternalExpression(internalExpression + keys[multi].value);
      }
    } catch (error: any) {
      setAnswer("Math error!");
    } finally {
      setShiftPressed(false);
    }
  };

  // Format display expression with proper closing brackets for functions
  const getFormattedDisplay = () => {
    let formatted = displayExpression;
    let bracketsToClose = openBrackets;
    let tempFunctionStack = [...functionStack];
    while (bracketsToClose > 0) {
      const isFunction =
        tempFunctionStack[tempFunctionStack.length - 1] || false;
      formatted += isFunction ? "}" : ")"; // Close with ) for functions, } for LaTeX
      tempFunctionStack = tempFunctionStack.slice(0, -1);
      bracketsToClose--;
    }
    console.log(formatted);
    return formatted || "0";
  };

  // Format internal expression with proper closing brackets for functions
  const getFormattedInternalExpression = () => {
    let internalFormated = internalExpression;
    let bracketsToClose = openBrackets;
    while (bracketsToClose > 0) {
      internalFormated += ")";
      bracketsToClose--;
    }

    return internalFormated;
  };
  console.log(internalExpression);
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
        </View>
        <DisplayScreen
          displayExpression={getFormattedDisplay()}
          answer={answer}
        />
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
              <SmallButton label="&#x25C0;" cap1=" " />
              <SmallButton label="&#x25B6;" cap1=" " />
              <SmallButton label="x¯¹" cap1="x!" mid="LOGIC" />
              <SmallButton label="CONS" cap2="CONV" />
            </View>
            <View className="flex-row justify-between w-full">
              <SmallButton label="a b/c" cap1="d/c" />
              <SmallButton label="√" cap1="∛" fxn={btnClicked} />
              <SmallButton label="x²" cap1="x³" mid="DEC" />
              <SmallButton label="⋀" cap1="ˣ√" mid="HEX" />
              <SmallButton label="log" cap1="10ˣ" mid="BIN" />
              <SmallButton label="ln" cap1="eˣ" mid="OCT" />
            </View>
            <View className="flex-row justify-between w-full">
              <SmallButton label="( - )" cap1="[∠]" mid="A" />
              <SmallButton label="° ' ' '" cap1="&#x27F5;" mid="B" />
              <SmallButton label="hyp" mid="C" />
              <SmallButton label="sin" cap1="sin¯¹" mid="D" fxn={btnClicked} />
              <SmallButton label="cos" cap1="cos¯¹" mid="E" />
              <SmallButton label="tan" cap1="tan¯¹" mid="F" />
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
