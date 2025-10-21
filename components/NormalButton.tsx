import { useTheme } from "@/hooks/themeContext";
import { ButtonType } from "@/types/buttonType";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const NormalButton = ({
  label,
  cap1,
  cap2,
  mid,
  fxn,
  width = 60,
  height = 28,
}: ButtonType) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        fxn && fxn(label);
      }}
      style={{ width: width, height: height, borderRadius: 14 }}
      className={`bg-${theme}-smallButton  border-l border-l-${theme}-hilite justify-center`}
    >
      <Text className={`text-${theme}-num text-center`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default NormalButton;
