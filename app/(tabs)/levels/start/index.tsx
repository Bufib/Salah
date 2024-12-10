import { StyleSheet, Pressable, View } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import ContinueButton from "@/components/ContinueButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import InformationContainer from "@/components/InformationContainer";
import Spacer from "@/components/Spacer";

export default function start() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView edges={["bottom"]}>
        <InformationContainer
          text="Bismillah Ar-Rahman Ar-Raheem"
          bold={true}
          center={true}
        />
        <Spacer />
        <ThemedView style={styles.textContainer}>
          <ThemedText style={styles.informationText}>
            Im Islam ist das Gebet (Salah) etwas ganz Besonderes. Es ist wie ein
            Gespräch mit Allah, bei dem wir uns an Ihn erinnern und Ihm nahe
            sein können. Das Gebet hilft uns, unser Herz sauber zu halten und
            daran zu denken, warum wir auf der Welt sind.
            {"\n"}
            {"\n"}
            Wir Schiiten verrichten unsere fünf täglichen Gebete
            {"\n"}
            {"\n"}
            <ThemedText style={{ fontWeight: "700" }}>
              1. Morgengebet
              {"\n"}
              2. Mittagsgebet
              {"\n"}
              3. Nachmittagsgebet
              {"\n"}
              4. Abendgebet
              {"\n"}
              5. Nachtgebet
              {"\n"}
              {"\n"}
            </ThemedText>
            in drei Zeiträumen, indem wir das Mittags- und Nachmittagsgebet
            sowie das Abend- und Nachtgebet, zusammenlegen. Diese Flexibilität
            zeigt die Barmherzigkeit und Praktikabilität unseres Glaubens.
            {"\n"}
            {"\n"}
            Vor dem Gebet führen wir eine rituelle Waschung (Wudu) durch, die
            Körper und Geist auf die Begegnung mit Allah vorbereitet.
          </ThemedText>
        </ThemedView>
        <Spacer />
        <ContinueButton
          link={"/(tabs)/levels/start/secondScreen"}
          text="Weiter"
          activateNextLevelButton={false}
        />
         <Spacer />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },

  textContainer: {
    flex: 1,
    marginHorizontal: 15,
    padding: 15,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: Colors.universal.startBorderColor,
  },
  informationText: {
    fontSize: 20,
  },
  boldText: {
    fontWeight: "700",
  },

  imageContainer: {
    position: "absolute",
    top: 0,
  },
  image: {
    height: 300,
    aspectRatio: 1,
  },
});
