import Menu from "@/components/Menu";
import Drawer from "expo-router/drawer";
import React from "react";
import { View } from "react-native";

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
        <>
          <View className="bg-black h-[80px] mb-[-35px]"></View>
          <Menu {...props} />
        </>
      )}
    />
  );
};

export default MainScreenLayout;
