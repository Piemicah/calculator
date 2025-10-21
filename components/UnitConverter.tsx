import { conversionFactors } from "@/util/data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type UnitProps = {
  title: string;
  onPress: (item: any) => void;
  setShowList: (showList: boolean) => void;
};

const UnitConverter = ({ title, onPress, setShowList }: UnitProps) => {
  const convList = conversionFactors.find((x) => x.title === title);
  return (
    <SafeAreaView className="absolute bottom-0 left-0 right-0 flex-1 top-[14px] bg-defaultBg">
      <View className="bg-[#2e2e2e] h-14  flex-row items-center">
        <TouchableOpacity
          className="justify-center rounded-full size-8 "
          onPress={() => {
            setShowList(false);
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <Text className="text-white">{title}</Text>
      </View>
      <FlatList
        data={(convList?.data ?? []).map((d) => ({
          ...d,
          rate: typeof d.rate === "string" ? parseFloat(d.rate) : d.rate,
        }))}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row items-center justify-between px-3 py-2 border-b border-b-[#707070ad]"
            onPress={() => {
              setShowList(false);
              onPress(item);
            }}
          >
            <Text className="text-white">{item.name}</Text>
            <Text className="text-white">({item.notation})</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default UnitConverter;
