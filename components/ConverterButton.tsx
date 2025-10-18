import { useTheme } from "@/hooks/themeContext";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ConverterProps = {
  label: string;
  fxn?: (label: string) => void;
  width?: number;
  height?: number;
  fontSize?: number;
};

const ConverterButton = ({
  label,
  fxn,
  width = 56,
  height = 34,
  fontSize = 20,
}: ConverterProps) => {
  const { theme } = useTheme();

  const bgColor =
    label === "AC" || label === "DEL"
      ? `bg-default-delacButton`
      : `bg-default-smallButton`;

  return (
    <View className="flex-col content-center">
      <View
        style={{
          width: width,
          height: height,
        }}
        className={` rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[10px] rounded-br-[10px] `}
      >
        <TouchableOpacity
          onPress={() => {
            fxn && fxn(label);
          }}
          style={{
            width: width - 1,
            height: height - 1,
          }}
          className={`justify-center items-center  rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[10px] rounded-br-[10px] border-t shadow-black border-l border-l-default-hilite border-t-default-hilite ${bgColor}`}
        >
          <Text className={`text-[${fontSize}px] text-default-num`}>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConverterButton;
