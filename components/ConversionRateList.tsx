import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

type RateType = {
  title: string;
  data: {
    name: string;
    notation: string;
    rate: number;
  }[];
};

const ConversionRateList = (data: RateType) => {
  return (
    <FlatList
      data={data.data}
      keyExtractor={(item) => item.notation}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row items-center justify-between px-3 py-2 border-b border-b-[#707070ad]">
          <Text className="text-white">{item.name}</Text>
          <Text className="text-white">({item.notation})</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default ConversionRateList;
