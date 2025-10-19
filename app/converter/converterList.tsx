import { conversionFactors, conversionRates } from "@/util/data";
import { setItem } from "@/util/storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, SectionList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type ConverterListRef = {
  getTitle: () => string;
};

const itemClicked = (item: any) => {
  router.push({
    pathname: "/converter/converterScreen",
    params: { title: item.title },
  });
  const convList = conversionFactors.find((x) => x.title === item.title);
  const data = convList?.data;
  if (data && data.length > 0) {
    setItem("leftUnit", data[0]);
    setItem("rightUnit", data[0]);
  }
};

const ConverterList = () => {
  return (
    <SafeAreaView className="flex-1 bg-defaultBg">
      <View className="bg-[#2e2e2e] w-full h-14 items-center gap-4 flex-row">
        <TouchableOpacity
          className="justify-center rounded-full size-8 "
          onPress={() => {
            router.push("/main/mainScreen");
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text className="text-white text-xl">Unit Converter</Text>
      </View>

      <SectionList
        sections={conversionRates}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="py-2 pl-5 my-1 bg-[#464646] flex-row items-center gap-4"
            onPress={() => {
              itemClicked(item);
            }}
          >
            <Image
              source={
                typeof item.img === "string" ? { uri: item.img } : item.img
              }
              className="size-7"
            />
            <View>
              <Text className="font-semibold text-white">{item.title}</Text>
              <Text className="text-[#c2c2c2]">{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { heading } }) => (
          <Text className="pl-2 mt-4 mb-2 text-white">{heading}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default ConverterList;
