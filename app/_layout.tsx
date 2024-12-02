import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, useLayoutEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Check if initial screen has already been shown
  useLayoutEffect(() => {
    const checkIfInitialalInformationInAsyncStorage = async () => {
      const name = await AsyncStorage.getItem("name");
      const gender = await AsyncStorage.getItem("gender");
      if (!name || !gender) {
        router.replace("/initialScreen");
      }
    };
    checkIfInitialalInformationInAsyncStorage();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(levels)' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
      </Stack>
    </ThemeProvider>
  );
}
