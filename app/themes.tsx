import { useTheme } from "@/hooks/themeContext";
import data from "@/util/data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Themes = () => {
  const { setTheme } = useTheme();

  const handlePress = (theme: string) => {
    setTheme && setTheme(theme);
    router.push("/");
  };
  return (
    <SafeAreaView className="bg-[#505060] flex-1">
      <View className="bg-[#2e2e2e] w-full h-14 justify-start items-center flex-row gap-10">
        <TouchableOpacity
          className="justify-center rounded-full size-8 "
          onPress={() => {
            router.push("/");
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text className="text-white text-[16px] font-semibold">Theme</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className=" justify-center items-center mx-2"
            onPress={() => {
              handlePress(item.name);
            }}
          >
            <View className="">
              <Text className="text-[18px] text-black absolute top-[60px] left-[60px] z-[3]">
                {item.name}
              </Text>
              <Image
                source={
                  typeof item.img === "string" ? { uri: item.img } : item.img
                }
                resizeMode="contain"
                className="w-[200px] h-[400px]"
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}

        // ItemSeparatorComponent={}
      />
    </SafeAreaView>
  );
};

export default Themes;
