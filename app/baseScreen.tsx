import ConverterButton from "@/components/ConverterButton";
import DisplayScreen from "@/components/DisplayScreen";
import MathQuillEditor, {
  MathQuillEditorRef,
} from "@/components/MathQuillEditor";
import useOrientation from "@/hooks/useOrientation";
import { keys } from "@/util/keypads";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const math = require("mathjs");

type BaseType = {
  name: string;
  value: number;
};

const BaseScreen = () => {
  const mathRef = useRef<MathQuillEditorRef>(null);
  const [latex, setLatex] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [base, setBase] = useState<BaseType>({ name: "Dec", value: 10 });
  const [dec, setDec] = useState<number | null>(null);
  const [ansMemory, setAnsMemory] = useState<string>("0");
  const { isLandscape } = useOrientation();

  const WIDTH = isLandscape ? 48 : 74;

  const specialBtns = [
    "DEL",
    "AC",
    "=",
    "◀",
    "▶",
    "DEC",
    "HEX",
    "OCT",
    "BIN",
  ];

  const btnClicked = async (key: string) => {
    const label = keys[key].value!;
    try {
      if (specialBtns.includes(label)) {
        switch (label) {
          case "AC":
            mathRef.current?.clear();
            setAnswer("");
            setDec(null);
            break;
          case "DEL":
            mathRef.current?.deleteLeft();

            break;

          case "=":
            convert();
            break;

          case "◀":
          case "▶":
            if (label === "◀") mathRef.current?.moveLeft(1);
            else mathRef.current?.moveRight(1);
            break;

          case "DEC":
            setBase({ name: "Dec", value: 10 });
            break;
          case "HEX":
            setBase({ name: "Hex", value: 16 });
            toBase();
            break;
          case "OCT":
            setBase({ name: "Oct", value: 8 });
            break;
          case "BIN":
            setBase({ name: "Bin", value: 2 });
            break;
        }
      } else {
        mathRef.current?.insert(label);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };

  const toBase = () => {
    const result = dec;
    if (result)
      try {
        let output: string;
        switch (base.value) {
          case 2:
            output = (result >>> 0).toString(2).toUpperCase();
            break;
          case 8:
            output = (result >>> 0).toString(8).toUpperCase();
            break;
          case 16:
            output = (result >>> 0).toString(16).toUpperCase();
            break;
          default:
            output = result.toString();
        }
        setAnswer(output);
      } catch {
        setAnswer("Syntax error!");
      }
  };
  const convert = () => {
    try {
      let expr = latexToExpression(latex).toUpperCase(); // e.g. "FF*2"

      expr = expr
        // Allow operators to appear without spaces (e.g., 1AND1, FFOR1, etc.)
        .replace(/([0-9A-F]+)AND([0-9A-F]+)/gi, "$1 & $2")
        .replace(/([0-9A-F]+)OR([0-9A-F]+)/gi, "$1 | $2")
        .replace(/([0-9A-F]+)XOR([0-9A-F]+)/gi, "bitXor($1,$2)")
        .replace(/NOT([0-9A-F]+)/gi, "~ $1")
        // handle versions with spaces too
        .replace(/\bAND\b/gi, "&")
        .replace(/\bOR\b/gi, "|")
        .replace(/\bXOR\b/gi, "bitXor($1,$2)")
        .replace(/\bNOT\b/gi, "~");

      let decimalExpr = expr;

      // If base is not decimal, convert all base digits to decimal before eval
      if (base.value !== 10) {
        // Replace all hex-like tokens (A-F or digits) with decimal equivalents
        decimalExpr = expr.replace(/[0-9A-F]+/g, (match) => {
          return parseInt(match, base.value).toString();
        });
      }

      // Evaluate the decimal expression using mathjs
      const result = math.evaluate(decimalExpr);
      setDec(Number(result));

      // Convert result back to selected base
      let output: string;
      switch (base.value) {
        case 2:
          output = (result >>> 0).toString(2).toUpperCase();
          break;
        case 8:
          output = (result >>> 0).toString(8).toUpperCase();
          break;
        case 16:
          output = (result >>> 0).toString(16).toUpperCase();
          break;
        default:
          output = result.toString();
      }

      setAnswer(output);
    } catch (error: any) {
      console.log("Error in convert:", error);
      setAnswer("");
    }
  };

  const latexToExpression = (latex: string): string => {
    const expression = latex
      .replace(/{/g, "(")
      .replace(/}/g, ")")
      .replace(/\\times/g, "*")
      .replace(/\\div/g, "/");
    return expression;
  };

  useEffect(() => {
    setBase({ name: "Dec", value: 10 });
  }, []);

  useEffect(() => {
    if (dec !== null && latex !== "") {
      toBase();
    } else {
      setAnswer("");
    }
  }, [base]);

  useEffect(() => {
    if (latex !== "") {
      convert();
    } else {
      setAnswer("");
    }
  }, [latex]);

  return (
    <SafeAreaView className="flex-1 bg-defaultBg px-2">
      <View className={`bg-[#2e2e2e] w-full py-2`}>
        <TouchableOpacity
          className="justify-center rounded-full size-8"
          onPress={() => {
            router.push("/main/mainScreen");
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <DisplayScreen>
        <View className="">
          <Text className="mt-1 text-xl">{base.name}</Text>
          <View className="flex-1">
            <MathQuillEditor
              ref={mathRef}
              initialLatex=""
              onChange={setLatex}
            />
          </View>
        </View>

        <Text className="text-xl text-right">{answer}</Text>
      </DisplayScreen>

      <View
        className={`gap-4 ${isLandscape ? "mt-1" : "mt-4"} ${isLandscape ? "flex-row" : "flex-col"}`}
      >
        <View
          className={`${isLandscape ? "gap-1 mt-4 w-1/3" : "gap-4 w-full"}`}
        >
          <View className={`flex-row justify-between w-full`}>
            <ConverterButton label="◀" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="▶" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="DEL" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="AC" fxn={btnClicked} width={WIDTH} />
          </View>
          <View className="flex-row justify-between w-full">
            <ConverterButton label="DEC" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="HEX" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="OCT" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="BIN" fxn={btnClicked} width={WIDTH} />
          </View>
          <View className="flex-row justify-between w-full">
            <ConverterButton label="AND" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="OR" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="XOR" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="NOT" fxn={btnClicked} width={WIDTH} />
          </View>
        </View>

        <View
          className={`${isLandscape ? "gap-1 mt-4 w-1/3" : "gap-4 w-full"}`}
        >
          <View className="flex-row justify-between w-full">
            <ConverterButton label="7" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="8" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="9" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="×" fxn={btnClicked} width={WIDTH} />
          </View>
          <View className="flex-row justify-between w-full">
            <ConverterButton label="4" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="5" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="6" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="÷" fxn={btnClicked} width={WIDTH} />
          </View>
          <View className="flex-row justify-between w-full">
            <ConverterButton label="1" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="2" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="3" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="+" fxn={btnClicked} width={WIDTH} />
          </View>
        </View>

        <View
          className={`${isLandscape ? "gap-1 mt-4 w-1/3" : "gap-4 w-full"}`}
        >
          <View className="flex-row justify-between w-full">
            <ConverterButton label="A" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="0" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="B" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="-" fxn={btnClicked} width={WIDTH} />
          </View>

          <View className="flex-row justify-between w-full">
            <ConverterButton label="C" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="D" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="E" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="F" fxn={btnClicked} width={WIDTH} />
          </View>

          <View className="items-center">
            <ConverterButton label="=" fxn={btnClicked} width={120} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BaseScreen;
