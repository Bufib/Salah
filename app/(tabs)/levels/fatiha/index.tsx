import React from "react";
import SuraScreen from "@/components/SuraScreen";
import { fatihaTextGerman } from "@/components/suren";
import { View } from "react-native";
import ContinueButton from "@/components/ContinueButton";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Fatiha() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView edges={["bottom"]}>
        <SuraScreen
          informationText="Die Fatiha ist die erste Sure im Quran. Darin danken wir Allah, dass Er uns erschaffen hat und uns lieb hat. Wir bitten Ihn, uns zu helfen, immer das Richtige zu tun und auf einem guten Weg zu bleiben"
          titleText="Schauen wir uns als erstes die Sura auf Deutsch an:"
          suraText={fatihaTextGerman}
        />
        <ContinueButton link={"/(tabs)/levels/fatiha/secondScreen"} activateNextLevelButton={false} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
