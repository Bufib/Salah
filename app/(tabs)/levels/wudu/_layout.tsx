import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import HeaderLeftBackButton from "@/components/HeaderLeftBackButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: true,
              headerTitle: "Wudu",
              headerLeft: () => <HeaderLeftBackButton backText="Übersicht" />,
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
