import Menu from "@/components/Menu";
import Drawer from "expo-router/drawer";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pieLogo from "../../assets/images/piemicahWhite.png";

const MainScreenLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#202020",
          // marginTop: 100,
          // width: 240,
        },
      }}
      drawerContent={(props) => (
        <SafeAreaView className="flex-1">
          <View className="bg-[#3d3d3d] h-[40px] justify-center items-center">
            <Text className="text-white text-[16px] font-bold">
              Sciencific Calculator
            </Text>
          </View>
          <Menu {...props} />
          <View className="items-center p-4">
            <Image
              className="size-[60px] mb-2"
              source={typeof pieLogo === "string" ? { uri: pieLogo } : pieLogo}
              resizeMode="contain"
              resizeMethod="resize"
            />

            <Text className="text-[#cecece]">© Piemicah Institutes</Text>
            <Text className="text-[#cecece]">nuges1.62@gmailcom</Text>
            <Text className="text-[#cecece]">+2347030829634</Text>
          </View>
        </SafeAreaView>
      )}
    />
  );
};

export default MainScreenLayout;
