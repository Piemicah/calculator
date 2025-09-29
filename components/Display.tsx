import { useTheme } from "@/hooks/themeContext";
import useOrientation from "@/hooks/useOrientation";
import React, { ReactNode } from "react";
import { View } from "react-native";

const Display = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const { isLandscape } = useOrientation();

  return (
    <View
      className={`bg-${theme}-display ${isLandscape ? "h-[110px]" : "h-[150px]"} w-full rounded-[10px] flex-col justify-between px-2 border `}
    >
      {children}
    </View>
  );
};

export default Display;
