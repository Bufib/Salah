import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import HeaderLeftBackButton from "@/components/HeaderLeftBackButton";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name='wudu'
          options={{
            headerShown: true,
            title: "Wudu",
            headerLeft: () => <HeaderLeftBackButton />,
          }}
        />
        <Stack.Screen
          name='fatiha'
          options={{
            headerShown: true,
            headerTitle: "Fatiha",
            headerLeft: () => <HeaderLeftBackButton />,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
