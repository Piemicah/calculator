import { ThemeProvider } from "@/hooks/themeContext";
import { Stack } from "expo-router";
import Drawer from "expo-router/drawer";
import { StatusBar } from "react-native";
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
      <SafeAreaProvider>
        <StatusBar hidden={true} />
        <Stack
          initialRouteName="main"
          screenOptions={{
            headerShown: false,
            navigationBarHidden: false,
          }}
        >
          <Stack.Screen name="themes" />
          <Stack.Screen name="formulas" />
          <Stack.Screen name="main" />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
