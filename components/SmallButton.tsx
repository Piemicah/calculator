import { useTheme } from "@/hooks/themeContext";
import useOrientation from "@/hooks/useOrientation";
import { ButtonType } from "@/types/buttonType";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SmallButton = ({
  label,
  cap1,
  cap2,
  mid,
  fxn,
  width = 50,
  height = 28,
}: ButtonType) => {
  const { theme } = useTheme();
  const { isLandscape } = useOrientation();
  const specialButtons = ["Shift", "Alpha"];

  const bgColor = specialButtons.includes(label)
    ? label === "Shift"
      ? `bg-${theme}-shift`
      : `bg-${theme}-alpha`
    : `bg-${theme}-smallButton`;

  const txtColor = specialButtons.includes(label)
    ? label === "Shift"
      ? `text-${theme}-shiftTxt uppercase text-[12px] font-semibold`
      : `text-${theme}-alphaTxt uppercase text-[12px] font-semibold`
    : `text-${theme}-num text-[14px]`;

  const shiftColor = `text-${theme}-shift`;
  const alphaColor = `text-${theme}-alpha`;
  return (
    <View className="flex-col content-center w-[49px]">
      <View className="flex flex-row justify-between">
        {cap1 && <Text className={`text-[12px] ${shiftColor}`}>{cap1}</Text>}
        {mid && (
          <Text className={`text-[12px] font-[600] ${alphaColor}`}>{mid}</Text>
        )}
        {cap2 && <Text className={`text-[12px] ${shiftColor}`}>{cap2}</Text>}
      </View>
      <View
        style={{ width: width, height: height }}
        className={`rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[10px] rounded-br-[10px]`}
      >
        <TouchableOpacity
          onPress={() => {
            fxn && fxn(label);
          }}
          style={{ width: width - 1, height: height - 1 }}
          className={`justify-center items-center rounded-[4px] border-t shadow-black border-l border-l-${theme}-hilite border-t-${theme}-hilite ${bgColor}`}
        >
          <Text className={`${txtColor}`}>{label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SmallButton;
