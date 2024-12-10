import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import HeaderLeftBackButton from "@/components/HeaderLeftBackButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UIManager, Platform } from "react-native";
import { useEffect } from "react";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    console.log("Platform:", Platform.OS);
    console.log("UIManager exists:", !!UIManager);
    console.log(
      "setLayoutAnimationEnabledExperimental exists:",
      !!UIManager?.setLayoutAnimationEnabledExperimental
    );
  }, []);

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: true,
              headerTitle: "Wudu",
              headerLeft: () => <HeaderLeftBackButton  />,
            }}
          />
          <Stack.Screen
            name="secondScreen"
            options={{
              headerShown: true,
              headerTitle: "Wudu",
            }}
          />
          <Stack.Screen
            name="thirdScreen"
            options={{
              headerShown: true,
              headerTitle: "Wudu",
            }}
          />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
