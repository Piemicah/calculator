import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type DisplayModeProp = {
  setDisplayMode: (mode: { normal: boolean; fixed: boolean }) => void;
  setEngPressed: (engPressed: boolean) => void;
  setFxValue: (fixedValue: number) => void;
  normal: boolean;
  fixed: boolean;
  fvalue: number;
};

const FixedSetting = ({
  setDisplayMode,
  setEngPressed,
  setFxValue,
  normal,
  fixed,
  fvalue,
}: DisplayModeProp) => {
  const [fixedValue, setFixedValue] = useState<number>(0);
  const [normalPressed, setNormalPressed] = useState<boolean>(normal);
  const [fixedPressed, setFixedPressed] = useState<boolean>(fixed);

  useEffect(() => {
    setFixedValue(fvalue);
  }, []);

  return (
    <View className="h-[240px] absolute top-[150px] right-4 left-4 z-50 bg-defaultBg rounded-xl overflow-hidden">
      <View className="flex-row justify-end h-10 bg-[#161616] pr-2">
        <TouchableOpacity
          onPress={() => {
            setEngPressed(false);
          }}
        >
          <Ionicons name="close-circle-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View className="border-b border-[#d8d8d8] pl-8 pb-4 flex-row gap-2 pt-4">
        <TouchableOpacity
          style={styles.outerCircle}
          onPress={() => {
            setNormalPressed(true);
            setFixedPressed(false);
            setDisplayMode({ normal: true, fixed: false });
          }}
        >
          {normalPressed && <View style={styles.innerCircle}></View>}
        </TouchableOpacity>
        <Text className="text-white">Normal</Text>
      </View>

      <View className="flex-row items-center justify-center border-b border-[#d8d8d8] pt-2">
        <TouchableOpacity
          style={styles.outerCircle}
          onPress={() => {
            setNormalPressed(false);
            setFixedPressed(true);
            setDisplayMode({ normal: false, fixed: true });
            setFxValue(fixedValue);
          }}
        >
          {fixedPressed && <View style={styles.innerCircle}></View>}
        </TouchableOpacity>
        <Text className="ml-2 text-white">Fixed</Text>
        <Slider
          // onTouchEnd={() => setFxValue(Math.round(fixedValue))}
          onSlidingComplete={() => setFxValue(Math.round(fixedValue))}
          className="w-[80px] h-10"
          style={{ width: 200, height: 40 }}
          value={fixedValue}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#FF00FF"
          maximumTrackTintColor="#a8a8a8"
          onValueChange={setFixedValue}
        />
        <Text className="text-white">{Math.round(fixedValue)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerCircle: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "#ff00ff",
  },
  outerCircle: {
    justifyContent: "center",
    alignItems: "center",
    width: 22,
    height: 22,
    borderRadius: 13,
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
});

export default FixedSetting;
