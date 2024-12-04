import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import HeaderLeftBackButton from "@/components/HeaderLeftBackButton";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: "Fatiha",
            headerLeft: () => <HeaderLeftBackButton />,
          }}
        />
        <Stack.Screen
          name="secondScreen"
          options={{
            headerShown: true,
            headerTitle: "Fatiha",
          }}
        />
         <Stack.Screen
          name="thirdScreen"
          options={{
            headerShown: true,
            headerTitle: "Fatiha",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
