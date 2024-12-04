import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { router } from "expo-router";
import useUserInformationStore from "@/components/userInformationStore";


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [navigationHandled, setNavigationHandled] = useState(false);
  const { name, gender } = useUserInformationStore();

  // Check for user information (name, gender)
  useEffect(() => {
    if (navigationHandled || !loaded) return;

    if (!name || !gender) {
      try {
        setNavigationHandled(true); // Mark navigation as handled
        router.replace("/initialScreen");
      } catch (error) {
        console.error("Error navigating to /initialScreen:", error);
      }
    } else {
      setNavigationHandled(true);
      router.replace("/");
    }
  }, [name, gender, loaded, navigationHandled]);

  // Hide splash screen after fonts are loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Render nothing until fonts are loaded
  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="initialScreen" />
      </Stack>
    </ThemeProvider>
  );
}
