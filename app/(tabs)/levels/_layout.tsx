import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";

export const unstable_settings = {
  initialRouteName: "/",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            title: "",
          }}
        />
        <Stack.Screen
          name="start"
          options={{
            headerShown: false,
            title: "Start",
          }}
        />
        <Stack.Screen
          name="wudu"
          options={{
            headerShown: false,
            title: "Wudu",
          }}
        />
        <Stack.Screen
          name="fatiha"
          options={{
            headerShown: false,
            headerTitle: "Fatiha",
          }}
        />
        <Stack.Screen
          name="eroeffnungspreisung"
          options={{
            headerShown: false,
            headerTitle: "Eröffnungspreisung",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
