import { Ionicons } from "@expo/vector-icons";
import { HeaderTitleProps } from "@react-navigation/elements";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type DrawerType = {
  title: string;
  drawerComponents: (props: any) => ReactNode;
};

const DrawerLayout = ({ title, drawerComponents }: DrawerType) => {
  return (
    <Drawer
      screenOptions={{
        headerTitle: (drawerLabel: HeaderTitleProps) => (
          <View>
            <Text className="text-white text-[18px]">{title}</Text>
            <Text className="text-[#e2e2e2] text-[15px]">
              {drawerLabel.children}
            </Text>
          </View>
        ),
        headerStyle: { backgroundColor: "#202020" },
        headerTintColor: "#fff",

        headerShadowVisible: false,
        headerRight: () => (
          <TouchableOpacity
            className="items-center justify-center mr-2 size-8"
            onPress={() => {
              router.push("/formulas/formulaHome");
            }}
          >
            <Ionicons name="close-circle-outline" size={30} color="#8080ff" />
          </TouchableOpacity>
        ),
        drawerStyle: {
          backgroundColor: "#202020",
          marginTop: 100,
          width: 240,
        },
        drawerLabelStyle: {
          color: "#b0b0b0",
          fontSize: 16,
        },

        drawerItemStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#d8d8d8",
          borderRadius: 0,
        },
        drawerActiveTintColor: "transparent",
      }}
      drawerContent={drawerComponents}
      backBehavior="fullHistory"
    />
  );
};

export default DrawerLayout;
