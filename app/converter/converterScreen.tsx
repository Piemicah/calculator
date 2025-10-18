import ConverterButton from "@/components/ConverterButton";
import DisplayScreen from "@/components/DisplayScreen";
import MathQuillEditor, {
  MathQuillEditorRef,
} from "@/components/MathQuillEditor";
import { keys } from "@/util/keypads";
import { getItem } from "@/util/storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import * as math from "mathjs";
import React, { useEffect, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type UnitProps = { name: string; notation: string; rate: number };
const WIDTH = 74;
const HEIGHT = 40;

const ConverterScreen = () => {
  const { title } = useLocalSearchParams<{ title: string }>();

  const [leftUnit, setLeftUnit] = useState<UnitProps>({
    name: "",
    notation: "",
    rate: 0,
  });
  const [rightUnit, setRightUnit] = useState<UnitProps>({
    name: "",
    notation: "",
    rate: 0,
  });
  const [latex, setLatex] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const mathRef = useRef<MathQuillEditorRef>(null);

  const getUnit = async () => {
    const leftValue = await getItem("leftUnit");
    setLeftUnit(leftValue ?? "Select Unit");
    const rightValue = await getItem("rightUnit");
    setRightUnit(rightValue ?? "Select Unit");
  };

  useEffect(() => {
    getUnit();
  }, []);

  useEffect(() => {
    if (!latex) return;
    convert();
  }, [latex]);

  const leftBtnClicked = () => {
    router.push({
      pathname: `/converter/[title]`,
      params: { title: title, side: "left" },
    });
  };

  const rightBtnClicked = () => {
    router.push({
      pathname: `/converter/[title]`,
      params: { title: title, side: "right" },
    });
  };

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
      .replace(/\\frac\(([\S]+)\)\(([\S]+)\)/g, "(($1)/($2))")
      .replace(/\\%/g, "%");

    return expression;
  };

  const specialBtns = ["DEL", "AC", "=", "◀", "▶", "ENG"];

  const btnClicked = async (key: string) => {
    const label = keys[key].value!;
    try {
      if (specialBtns.includes(label)) {
        switch (label) {
          case "AC":
            mathRef.current?.clear();
            setAnswer("");
            break;
          case "DEL":
            mathRef.current?.deleteLeft();
            convert();
            break;

          case "=":
            convert();

            break;

          case "◀":
          case "▶":
            if (label === "◀") mathRef.current?.moveLeft(1);
            else mathRef.current?.moveRight(1);
            break;
        }
      } else {
        mathRef.current?.insert(label);
        convert();
      }
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };

  const convert = () => {
    try {
      const factor = leftUnit.rate / rightUnit.rate;
      const expr = latexToExpression(latex);
      const evaluation = math.evaluate(expr || "0");
      setAnswer((evaluation * factor).toString());
    } catch {
      setAnswer("");
    }
  };

  const switchButtonClicked = () => {
    const temp = leftUnit;
    setLeftUnit(rightUnit);
    setRightUnit(temp);
    convert();
  };

  return (
    <SafeAreaView className="flex-1 px-1 bg-default-panel">
      <View className="bg-[#2e2e2e] w-full h-14  flex-row items-center">
        <TouchableOpacity
          className="justify-center rounded-full size-8 "
          onPress={() => {
            router.push("/converter/converterList");
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <Text className="text-white">{title}</Text>
      </View>
      <View className="flex-row items-center justify-between my-2">
        <ConverterButton
          label={leftUnit.name}
          width={160}
          height={40}
          fontSize={18}
          fxn={leftBtnClicked}
        />
        <TouchableOpacity onPress={switchButtonClicked}>
          <Image
            source={require("../../assets/images/icons/exchange.png")}
            className="size-8"
          />
        </TouchableOpacity>
        <ConverterButton
          label={rightUnit.name}
          width={160}
          height={40}
          fontSize={18}
          fxn={rightBtnClicked}
        />
      </View>

      <DisplayScreen>
        <View className="flex-row ">
          <View className="flex-1">
            <MathQuillEditor
              ref={mathRef}
              initialLatex=""
              onChange={setLatex}
            />
          </View>
          <Text className="mt-2 text-xl">{leftUnit.notation}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-xl">{answer}</Text>
          <Text className="text-xl">{rightUnit.notation}</Text>
        </View>
      </DisplayScreen>
      <View className="mt-4 gap-4">
        <View className="flex-row justify-between w-full">
          <ConverterButton label="◀" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="▶" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="DEL" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="AC" fxn={btnClicked} width={WIDTH} />
        </View>
        <View className="flex-row justify-between w-full">
          <ConverterButton label="a b/c" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="√" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="x²" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="xⁿ" fxn={btnClicked} width={WIDTH} />
        </View>
        <View className="flex-row justify-between w-full">
          <ConverterButton label="x¯¹" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="(" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label=")" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="x!" fxn={btnClicked} width={WIDTH} />
        </View>
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
        <View className="flex-row justify-between w-full">
          <ConverterButton label="0" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="•" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="EXP" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="-" fxn={btnClicked} width={WIDTH} />
        </View>
        <View className="flex-row justify-between w-full">
          <ConverterButton label="log" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="ln" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="%" fxn={btnClicked} width={WIDTH} />
          <ConverterButton label="=" fxn={btnClicked} width={WIDTH} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConverterScreen;
