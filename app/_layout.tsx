// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect, useState } from "react";
// import "react-native-reanimated";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import { router } from "expo-router";
// import useGetUserInformation from "@/components/useGetUserInformation";

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });
//   const [navigationHandled, setNavigationHandled] = useState(false);
//   // const { name, gender } = useUserInformationStore();

//   const { name, gender, loading } = useGetUserInformation();

//   // Check for user information (name, gender)
//   useEffect(() => {
//     if (navigationHandled || !loaded) return;

//     if (!name || !gender) {
//       try {
//         setNavigationHandled(true); // Mark navigation as handled
//         router.replace("/initialScreen");
//       } catch (error) {
//         console.error("Error navigating to /initialScreen:", error);
//       }
//     } else {
//       setNavigationHandled(true);
//       router.replace("/");
//     }
//   }, [name, gender, loaded, navigationHandled]);

//   // Hide splash screen after fonts are loaded
//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   // Render nothing until fonts are loaded
//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//         <Stack.Screen name="initialScreen" options={{ headerShown: false }}/>
//       </Stack>
//     </ThemeProvider>
//   );
// }

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
import useGetUserInformation from "@/components/useGetUserInformation";
import HeaderLeftBackButton from "@/components/HeaderLeftBackButton";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const { name, gender, userLoading } = useGetUserInformation();
  const [navigationHandled, setNavigationHandled] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  // Prepare app by waiting for both fonts and user information
  useEffect(() => {
    if (loaded && !userLoading) {
      setAppIsReady(true);
    }
  }, [loaded, userLoading]);

  // Handle navigation to the appropriate screen based on user information
  useEffect(() => {
    if (appIsReady && !navigationHandled) {
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
    }
  }, [name, gender, appIsReady, navigationHandled]);

  // Hide splash screen after everything is loaded
  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Show splash screen or nothing until everything is loaded
  if (!appIsReady) {
    return null; // Alternatively, you could add a loading indicator here
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="initialScreen" options={{ headerShown: false }} />
        <Stack.Screen
          name="impressum"
          options={{
            headerShown: true,
            headerTitle: "Impressum",
            headerLeft: () => <HeaderLeftBackButton />,
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            headerShown: true,
            headerTitle: "Über diese App",
            headerLeft: () => <HeaderLeftBackButton />,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
