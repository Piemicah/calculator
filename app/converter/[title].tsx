import ConversionRateList from "@/components/ConversionRateList";
import { conversionFactors } from "@/util/data";
import { setItem } from "@/util/storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RateFactorsList = () => {
  const { title, side } = useLocalSearchParams();

  const getItemDetail = async (item: any) => {
    if (side === "left") await setItem("leftUnit", item);
    else await setItem("rightUnit", item);
    console.log(item);
  };

  console.log(side);
  const convList = conversionFactors.find((x) => x.title === title);
  return (
    <SafeAreaView className="flex-1 bg-defaultBg">
      <View className="bg-[#2e2e2e] w-full h-14  flex-row items-center">
        <TouchableOpacity
          className="justify-center rounded-full size-8 "
          onPress={() => {
            router.back();
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <Text className="text-white">{title}</Text>
      </View>
      <ConversionRateList
        data={convList?.data ?? []}
        title={convList?.title ?? ""}
        onPress={getItemDetail}
      />
    </SafeAreaView>
  );
};

export default RateFactorsList;
