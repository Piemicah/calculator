import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Mode = ({
  setModePressed,
}: {
  setModePressed: (modePressed: boolean) => void;
}) => {
  return (
    <View className="h-[240px] absolute top-[150px] right-4 left-4 z-50 bg-defaultBg rounded-xl overflow-hidden">
      <View className="flex-row justify-end h-10 bg-[#161616] pr-2">
        <TouchableOpacity
          onPress={() => {
            setModePressed(false);
          }}
        >
          <Ionicons name="close-circle-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="border-b border-b-[#707070ad] py-2  items-center"
        onPress={() => {
          router.push("/baseScreen");
          setModePressed(false);
        }}
      >
        <Text className="text-white">Base</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Mode;
