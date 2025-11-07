import { MemoryProvider } from "@/hooks/memoryContext";
import { ThemeProvider } from "@/hooks/themeContext";
import { Stack } from "expo-router";
import Drawer from "expo-router/drawer";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";

const OptionDrawer = () => {
  return (
    <Drawer>
      <Drawer.Screen name="index" />
    </Drawer>
  );
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <MemoryProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <StatusBar hidden={true} />
            <Stack
              screenOptions={{
                headerShown: false,
                navigationBarHidden: false,
              }}
            >
              <Stack.Screen name="main" />
              <Stack.Screen name="themes" />
              <Stack.Screen name="formulas" />
              <Stack.Screen name="converter" />
              <Stack.Screen name="index" />
              <Stack.Screen name="baseScreen" />
            </Stack>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </MemoryProvider>
    </ThemeProvider>
  );
}
