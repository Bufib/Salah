import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Switch, Linking } from "react-native";
import { Appearance } from "react-native";
import { useLayoutEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

export default function settings() {
  const colorScheme = Appearance.getColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme == "dark");

  // Save Font mode and Color mode in Asyncstorage
  useLayoutEffect(() => {
    const getColorMode = async () => {
      const colorMode = await AsyncStorage.getItem("ColorMode");

      // Set Colormode according to last session
      setIsDarkMode(colorMode === "dark");
      Appearance.setColorScheme(colorMode === "dark" ? "dark" : "light");
    };

    getColorMode();
  }, []);

  const toggleSwitchColor = () => {
    const changeColor = isDarkMode ? "light" : "dark";
    Appearance.setColorScheme(changeColor);
    saveSwitchStatus(changeColor);
    setIsDarkMode(!isDarkMode);
  };

  const saveSwitchStatus = async (colorMode: "light" | "dark") => {
    await AsyncStorage.setItem("ColorMode", colorMode);
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.contentContainer} edges={["top"]}>
        <ThemedView style={styles.switchContainer}>
          <ThemedText style={styles.switchText}>Dunkelmodus:</ThemedText>
          <Switch
            trackColor={{ false: "#3e3e3e", true: "#4dd964" }}
            thumbColor={isDarkMode ? "#000000" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchColor}
            value={isDarkMode}
          />
        </ThemedView>

        <ThemedView style={styles.spacer} />

        <ThemedView style={styles.informationContainer}>
          <Link style={styles.linkText} href="/about" push>
            Über die App
          </Link>
        </ThemedView>

        <ThemedView style={styles.linkContainer}>
          <ThemedText
            style={styles.linkText}
            onPress={() =>
              Linking.openURL(
                "https://bufib.github.io/Islam-Fragen-App-rechtliches/datenschutz"
              )
            }
          >
            Datenschutz
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.linkContainer}>
          <Link style={styles.linkText} href={"/impressum"} push>
            Impressum
          </Link>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 20,
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 30,
  },
  switchText: {
    fontSize: 20,
    fontWeight: "700",
  },

  spacer: {
    flexGrow: 1,
  },
  informationContainer: {
    alignSelf: "center",
  },
  versionTextContainer: {
    alignSelf: "center",
    marginBottom: 20,
  },
  versionText: {
    fontWeight: "bold",
  },

  linkContainer: {
    alignSelf: "center",
  },

  linkText: {
    color: Colors.universal.link,
    fontSize: 20,
    marginBottom: 20,
  },
});
