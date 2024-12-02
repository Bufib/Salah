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
import useInitialInfoStore, {
  useLoadInitialInformation,
} from "@/components/userInformationStore";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { name, gender } = useInitialInfoStore();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [navigationHandled, setNavigationHandled] = useState(false);

  // Automatically loads initial information when the app opens
  useLoadInitialInformation();

  // Check if initial screen has already been shown
  useEffect(() => {
    const navigateIfNecessary = async () => {
      if (navigationHandled) return; // Prevent duplicate navigation attempts

      if (!name || !gender) {
        if (loaded) {
          try {
            setNavigationHandled(true); // Mark navigation as handled
            await router.replace("/initialScreen");
          } catch (error) {
            console.error("Error navigating to /initialScreen:", error);
          }
        }
      }
    };

    navigateIfNecessary();
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
        <Stack.Screen name="(levels)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
