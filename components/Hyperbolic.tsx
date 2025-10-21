import { hyperbolic } from "@/util/data";
import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type HypeProps = {
  getHypItem: (item: any) => void;
  setHypPressed: (hypePressed: boolean) => void;
};

export type HypeItemProps = {
  title: string;
  subtitle: string;
  value: string;
};

const Hyperbolic = ({ getHypItem, setHypPressed }: HypeProps) => {
  return (
    // The full-screen transparent backdrop
    <TouchableWithoutFeedback onPress={() => setHypPressed(false)}>
      <View className="absolute inset-0 z-20 bg-black/40">
        {/* The actual bottom sheet */}
        <TouchableWithoutFeedback onPress={() => {}}>
          <View className="absolute bottom-0 h-[75vh] w-full bg-defaultBg rounded-t-2xl">
            <FlatList
              data={hyperbolic}
              keyExtractor={(item, index) => item.title + index}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  className="flex-row items-center gap-2 py-2 border-b border-b-[#707070ad] pl-2"
                  onPress={() => {
                    setHypPressed(false);
                    getHypItem(item);
                  }}
                >
                  <Text className="text-white">{index + 1}</Text>
                  <View>
                    <Text className="text-white">{item.title}</Text>
                    <Text className="text-[#cacacae3]">{item.subtitle}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Hyperbolic;
