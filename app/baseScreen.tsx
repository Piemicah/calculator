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

type BaseType = {
  name: string;
  value: number;
};

const BaseScreen = () => {
  const mathRef = useRef<MathQuillEditorRef>(null);
  const [latex, setLatex] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [base, setBase] = useState<BaseType>({ name: "Dec", value: 10 });
  const [dec, setDec] = useState<number>(0);
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
            break;
          case "DEL":
            mathRef.current?.deleteLeft();
            //   convert();
            break;

          case "=":
            toDec();
            convert();

            break;

          case "◀":
          case "▶":
            if (label === "◀") mathRef.current?.moveLeft(1);
            else mathRef.current?.moveRight(1);
            break;

          case "DEC":
            setBase({ name: "Dec", value: 10 });
            // toDec();
            break;
          case "HEX":
            setBase({ name: "Hex", value: 16 });
            // toDec();
            break;
          case "OCT":
            setBase({ name: "Oct", value: 8 });
            // toDec();
            break;
          case "BIN":
            setBase({ name: "Bin", value: 2 });
            // toDec();
            break;
        }
      } else {
        mathRef.current?.insert(label);
        // convert();
      }
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };

  const convert = () => {
    const remainder = "0123456789ABCDEF";
    let orders = "";
    let q = 0;
    let n = dec;
    let b = base.value;
    do {
      q = Math.floor(n / b);
      let r = n % b;
      orders += remainder[r];
      n = q;
    } while (q != 0);

    setAnswer(orders.split("").reverse().join(""));
  };

  const latexToExpression = (latex: string): string => {
    const expression = latex
      .replace(/{/g, "(")
      .replace(/}/g, ")")
      .replace(/\\times/g, "*")
      .replace(/\\div/g, "/");
    //   .replace(/A/g, "(10)")
    //   .replace(/B/g, "(11)")
    //   .replace(/C/g, "(12)")
    //   .replace(/D/g, "(13)")
    //   .replace(/E/g, "(14)")
    //   .replace(/F/g, "15");

    return expression;
  };

  const toDec = () => {
    const expr = latexToExpression(latex);
    const evaluation = expr;
    let num = 0;
    for (
      let i = 0, j = evaluation.length - 1;
      i < evaluation.length;
      i++, j--
    ) {
      let n = 0;
      let c = evaluation[i];

      if (c === "A") n = 10;
      else if (c === "B") n = 11;
      else if (c === "C") n = 12;
      else if (c === "D") n = 13;
      else if (c === "E") n = 14;
      else if (c === "F") n = 15;
      else n = Number(c);
      num += n * base.value ** j;
    }
    setDec(num);
  };

  useEffect(() => {
    setBase({ name: "Dec", value: 10 });
  }, []);

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

        <View className={`gap-4 ${isLandscape ? "w-1/3 mt-4" : "w-full"}`}>
          <View
            className={`flex-row ${isLandscape ? "gap-2" : "justify-between"} w-full`}
          >
            <ConverterButton label="0" fxn={btnClicked} width={WIDTH} />

            <ConverterButton label="A" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="B" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="-" fxn={btnClicked} width={WIDTH} />
          </View>
        </View>

        <View className={`gap-4 ${isLandscape ? "w-1/3 mt-4" : "w-full"}`}>
          <View
            className={`flex-row ${isLandscape ? "gap-2" : "justify-between"} w-full`}
          >
            <ConverterButton label="C" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="D" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="E" fxn={btnClicked} width={WIDTH} />
            <ConverterButton label="F" fxn={btnClicked} width={WIDTH} />
          </View>
          <ConverterButton label="=" fxn={btnClicked} width={WIDTH} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BaseScreen;
