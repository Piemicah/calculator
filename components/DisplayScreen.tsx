import { Colors } from "@/constants/Colors";
import { useTheme } from "@/hooks/themeContext";
import useOrientation from "@/hooks/useOrientation";
import React from "react";
import { Text, View } from "react-native";
import Katex from "react-native-katex";

const DisplayScreen = ({
  displayExpression,
  answer,
}: {
  displayExpression: string;
  answer: string;
}) => {
  const { theme } = useTheme();
  const { isLandscape } = useOrientation();
  const latexFontSize = isLandscape ? `2em` : `3.5em`;

  const inlineStyle = `
html, body {
  display: flex;
  background-color: ${Colors[theme as keyof typeof Colors].display};
  justify-content: start;
  align-items: start;
  height: 100%;
  margin-top: 4px;
  padding: 0;
  touch-action: pan-y pan-x;
 
}
.katex {
  font-size: ${latexFontSize};
  margin: 0;
  display: flex;
  color:#000;
}
    .katex-error {
        color: blue;
    }
`;

  return (
    <View
      className={`bg-${theme}-display ${isLandscape ? "h-[110px]" : "h-[150px]"} w-full rounded-[10px] flex-col justify-between px-2 border py-0`}
    >
      <View className="h-[50px]">
        <Katex expression={` ${displayExpression}`} inlineStyle={inlineStyle} />
      </View>
      <Text className="text-[18px] text-right">{answer}</Text>
    </View>
  );
};

export default DisplayScreen;
