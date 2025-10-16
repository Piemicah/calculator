import BigButton from "@/components/BigButton";
import DisplayScreen from "@/components/DisplayScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ConverterScreen = () => {
  const { title } = useLocalSearchParams<{ title: string }>();
  console.log(title);

  const btnClicked = () => {
    if (!title) return;
    router.push({
      pathname: "/converter/[title]",
      params: { title },
    });
  };
  return (
    <SafeAreaView className="flex-1 px-1 bg-default-panel">
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
      <View className="flex-row items-center justify-between">
        <BigButton label="left" width={160} height={40} fxn={btnClicked} />
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/icons/exchange.png")}
            className="size-8"
          />
        </TouchableOpacity>
        <BigButton label="left" width={160} height={40} />
      </View>

      <DisplayScreen>
        <View className="flex-row justify-between">
          <TextInput
            placeholder="0"
            className="text-xl"
            showSoftInputOnFocus={false}
          />
          <Text className="text-xl">mm</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-xl">56</Text>
          <Text className="text-xl">mm</Text>
        </View>
      </DisplayScreen>
      <View className="flex-row justify-center">
        <BigButton label="◀" cap1=" " />
        <BigButton label="▶" cap1=" " />
      </View>
      <View className="flex-row justify-between w-full">
        <BigButton label="7" width={65} />
        <BigButton label="8" width={65} />
        <BigButton label="9" width={65} />
        <BigButton label="DEL" width={65} />
        <BigButton label="AC" width={65} />
      </View>
      <View className="flex-row justify-between w-full">
        <BigButton label="3" width={75} height={40} />
        <BigButton label="4" width={75} height={40} />
        <BigButton label="5" width={75} height={40} />
        <BigButton label="6" width={75} height={40} />
      </View>
      <View className="flex-row justify-between w-full">
        <BigButton label="2" width={75} height={40} />
        <BigButton label="1" width={75} height={40} />
        <BigButton label="0" width={75} height={40} />
        <BigButton label="." width={75} height={40} />
      </View>
    </SafeAreaView>
  );
};

export default ConverterScreen;
