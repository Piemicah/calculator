import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

const ConverterLayout = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="converterList" />
        <Stack.Screen name="converterScreen" />
      </Stack>
    </>
  );
};

export default ConverterLayout;
