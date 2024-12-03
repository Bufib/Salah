import { StyleSheet, Pressable, View } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import { fatihaTextGerman } from "@/components/suren";
import { Image } from "expo-image";
import useInitialInfoStore from "@/components/userInformationStore";
import { useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import RenderSura from "@/components/RenderSura";
import Spacer from "@/components/Spacer";
import InformationContainer from "@/components/InformationContainer";
import TitleSura from "@/components/TitleSura";
import ContinueButton from "@/components/ContinueButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function fatiha() {
  const { name, gender } = useInitialInfoStore();

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView edges={["bottom"]}>
        <Spacer />
        <InformationContainer
          text={
            "Die Fatiha ist die erste Sure im Quran. Darin danken wir Allah, dass Er uns erschaffen hat und uns lieb hat. Wir bitten Ihn, uns zu helfen, immer das Richtige zu tun und auf einem guten Weg zu bleiben"
          }
          gender={gender}
        />
        <Spacer />
        <TitleSura text="Schauen wir uns als erstes die Sura auf Deutsch an:" />
        <Spacer />
        <RenderSura text={fatihaTextGerman} />
        <ContinueButton />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
