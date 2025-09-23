import { useTheme } from "@/hooks/themeContext";
import { ButtonType } from "@/types/buttonType";
import React from "react";
import { TouchableOpacity } from "react-native";

const NormalButton = ({ label, cap1, cap2, mid, fxn }: ButtonType) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      className={`w-[48px] h-[28px] bg-${theme}-bigButton rounded-[14px] border-l border-l-${theme}-hilite`}
    ></TouchableOpacity>
  );
};

export default NormalButton;
