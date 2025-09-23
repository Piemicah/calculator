import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

const FormulaLayout = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="maths" />
        <Stack.Screen name="physics" />
        <Stack.Screen name="chemistry" />
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
};

export default FormulaLayout;
