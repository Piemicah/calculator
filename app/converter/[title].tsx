import ConversionRateList from "@/components/ConversionRateList";
import { conversionFactors } from "@/util/data";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const RateFactorsList = () => {
  const { title } = useLocalSearchParams();

  const convList = conversionFactors.find((x) => x.title === title);
  return (
    <SafeAreaView className="flex-1 bg-defaultBg">
      <ConversionRateList
        data={convList?.data ?? []}
        title={convList?.title ?? ""}
      />
    </SafeAreaView>
  );
};

export default RateFactorsList;
