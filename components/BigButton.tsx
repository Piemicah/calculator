import { useTheme } from "@/hooks/themeContext";
import { ButtonType } from "@/types/buttonType";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BigButton = ({ label, cap1, cap2, mid, fxn }: ButtonType) => {
  const { theme } = useTheme();

  const bgColor =
    label === "AC" || label === "DEL"
      ? `bg-${theme}-delacButton`
      : `bg-${theme}-bigButton`;
  const shiftColor = `text-${theme}-shift`;

  return (
    <View className="flex-col content-center">
      <View className="flex flex-row justify-between">
        <Text className={`text-[12px] ${shiftColor}`}>{cap1}</Text>
        <Text className={`text-[12px] ${shiftColor}`}>{mid}</Text>
        <Text className={`text-[12px] ${shiftColor}`}>{cap2}</Text>
      </View>
      <View
        className={`w-[56px] h-[34px] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[10px] rounded-br-[10px] `}
      >
        <TouchableOpacity
          onPress={() => {
            fxn && fxn(label);
          }}
          className={`justify-center items-center w-[55px] h-[33px] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[10px] rounded-br-[10px] border-t shadow-black border-l border-l-${theme}-hilite border-t-${theme}-hilite ${bgColor}`}
        >
          <Text className={`text-[18px] text-${theme}-num`}>{label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BigButton;
