import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Formula = () => {
  return (
    <SafeAreaView className="bg-[#101010] flex-1 px-4 gap-3">
      <View className="bg-[#2e2e2e] w-full h-14 justify-center">
        <TouchableOpacity
          className="justify-center rounded-full size-8 "
          onPress={() => {
            router.push("/");
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="bg-[#288A59] w-full justify-center flex-col py-3 rounded-xl mb-4"
        onPress={() => {
          router.push("/formulas/maths/geometry");
        }}
      >
        <View className="flex-row items-center gap-4">
          <MaterialCommunityIcons name="sigma" size={60} color="#fff" />
          <Text className="text-white text-[20px] font-[600]">
            Math Formulas
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-[#1f274e] w-full justify-center flex-col py-3 rounded-xl mb-4"
        onPress={() => {
          router.push("/formulas/physics/mechanics");
        }}
      >
        <View className="flex-row items-center gap-4 ml-4">
          <Ionicons name="logo-electron" size={60} color="#fff" />
          <Text className="text-white text-[20px] font-[600]">
            Physics Formulas
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="bg-[#eb9d0d] w-full justify-center flex-col py-3 rounded-xl">
        <View className="flex-row items-center gap-4 ml-4">
          <Fontisto name="test-tube" size={60} color="#000" />
          <Text className="text-white text-[20px] font-[600]">
            Chemistry Formulas
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Formula;
