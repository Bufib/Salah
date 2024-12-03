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

export default function fatiha() {
  const { name, gender } = useInitialInfoStore();

  return (
    <ScrollView style={styles.container}>
      <Spacer />
      <ThemedView style={styles.informationContainer}>
        <ThemedText style={styles.informationText}>
          Die Fatiha ist die erste Sure im Quran. Darin danken wir Allah, dass
          Er uns erschaffen hat und uns lieb hat. Wir bitten Ihn, uns zu helfen,
          immer das Richtige zu tun und auf einem guten Weg zu bleiben
        </ThemedText>
        {gender && (
          <Image
            style={styles.image}
            source={
              gender === "boy"
                ? require("@/assets/images/boy.png")
                : require("@/assets/images/girl.png")
            }
            contentFit="cover"
          />
        )}
      </ThemedView>
      <Spacer />
      <RenderSura text={fatihaTextGerman} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  informationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10
  },
  informationText: {
    flex: 1,
    fontSize: 18,
    lineHeight: 23,
    marginRight: 10,
  },
  image: {
    height: 250,
    aspectRatio: 0.6,
    alignSelf: "flex-end",
  },
  germanTextContainer: {
    alignItems: "center",
    padding: 15,
    margin: 15,
  },

  germanText: {
    fontSize: 18,
  },
});
