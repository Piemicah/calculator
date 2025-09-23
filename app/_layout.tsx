import { ThemeProvider } from "@/hooks/themeContext";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";
export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar hidden={true} />
        <Stack
          screenOptions={{
            headerShown: false,
            navigationBarHidden: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="themes" />
          <Stack.Screen name="formulas" />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
