import React from "react";
import SuraScreen from "@/components/SuraScreen";
import { fatihaTextGerman } from "@/components/suren";
import ContinueButton from "@/components/ContinueButton";
import { StyleSheet } from "react-native";
import { View, ScrollView } from "react-native";
import Spacer from "@/components/Spacer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedView } from "@/components/ThemedView";
import { coustomTheme } from "@/components/coustomTheme";

export default function Fatiha() {
  const themeStyles = coustomTheme()
  return (
    <ScrollView style={[styles.container, themeStyles.background]}>
      <ThemedView style={styles.contentContainer}>
        <SuraScreen
          informationText="Die Fatiha ist die erste Sure im Quran. Darin danken wir Allah, dass Er uns erschaffen hat und uns lieb hat. Wir bitten Ihn, uns zu helfen, immer das Richtige zu tun und auf einem guten Weg zu bleiben"
          titleText="Schauen wir uns als erstes die Sura auf Deutsch an:"
          suraText={fatihaTextGerman}
        />
        <ContinueButton
          link={"/(tabs)/levels/fatiha/secondScreen"}
          activateNextLevelButton={false}
        />
        <Spacer />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  contentContainer: {
    flex: 1,
  },
});
