import React from "react";
import SuraScreen from "@/components/SuraScreen";
import { fatihaTextGerman } from "@/components/suren";
import ContinueButton from "@/components/ContinueButton";
import { Pressable, StyleSheet } from "react-native";
import { View, ScrollView } from "react-native";
import Spacer from "@/components/Spacer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedView } from "@/components/ThemedView";
import { coustomTheme } from "@/components/coustomTheme";
import { Image } from "expo-image";
import * as Speech from "expo-speech";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

export default function Fatiha() {
  const themeStyles = coustomTheme();

  const sayText = () => {
    const text = "الله أكبر";
    Speech.speak(text, { language: "ar" });
  };

  return (
    <ScrollView style={[styles.container, themeStyles.background]}>
      <ThemedView style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/images/boyEroeffnung.webp")}
          contentFit="contain"
        />
        <Spacer />
        <ThemedView style={styles.audioContainer}>
          <Spacer />
          <Pressable onPress={sayText} style={[styles.audioContainerButton, themeStyles.audioButton]}>
            <ThemedText style={styles.audioContainerText}>
              Sag die Erröffnungspreisung
            </ThemedText>
          </Pressable>
        </ThemedView>
        <Spacer />
        <Spacer />
        <ContinueButton
          link={"/(tabs)/levels"}
          activateNextLevelButton={true}
          text="Fertig"
        />
        <Spacer />
        <Spacer />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  contentContainer: {
    flex: 1,
  },
  audioContainer: {},
  audioContainerButton: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 220,
    height: 220,
    borderWidth: 3,
    borderRadius: 900,
  
  },
  audioContainerText: {
    padding: 5,
    fontSize: 20,
    textAlign: "center",
    flexWrap: "wrap",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
  },
});
