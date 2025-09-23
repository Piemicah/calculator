import React from "react";
import { FlatList, Image, Text, View } from "react-native";

type FormularType = {
  data: { name: string; img: string }[];
  title: string;
};

const FormulaList = ({ data, title }: FormularType) => {
  return (
    <View className="flex-1 px-2 bg-black">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View className="items-center w-full mb-4 bg-white  rounded-[10px] overflow-hidden ">
            <View className="bg-[#1d8ebb] w-full h-12 justify-center">
              <Text className="text-xl font-semibold text-center text-white">
                {item.name}
              </Text>
            </View>
            <View className="w-full items-center justify-center py-3 h-[350px]">
              <Image
                className="w-full h-full "
                source={
                  typeof item.img === "string" ? { uri: item.img } : item.img
                }
                resizeMode="contain"
                resizeMethod="resize"
              />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        ListHeaderComponent={
          <View className="my-4">
            <Text className="font-bold text-center text-[18px] text-white uppercase">
              {title}
            </Text>
          </View>
        }
        ListEmptyComponent={
          <Text className="my-4 text-center text-white">
            No formulas available
          </Text>
        }
      />
    </View>
  );
};

export default FormulaList;
