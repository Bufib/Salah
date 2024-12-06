import { StyleSheet, Pressable, View } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import ContinueButton from "@/components/ContinueButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

export default function start() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView edges={["bottom"]}>
        <ThemedView style={styles.textContainer}>
          <ThemedText style={[styles.informationText]}>
            Im Islam ist das Gebet (Salah) etwas ganz Besonderes. Es ist wie ein
            Gespräch mit Allah, bei dem wir uns an Ihn erinnern und Ihm nahe
            sein können. Das Gebet hilft uns, unser Herz sauber zu halten und
            daran zu denken, warum wir auf der Welt sind.
            {"\n"}
            {"\n"}
            Wir Schiiten verrichten unsere fünf täglichen Gebete{" "}
            <ThemedText style={{ fontWeight: "700" }}>
              (Morgengebet, Mittagsgebet, Nachmittagsgebet, Abendgebet und
              Nachtgebet)
            </ThemedText>{" "}
            in drei Zeiträumen, indem wir das Mittags- und Nachmittagsgebet
            sowie das Abend- und Nachtgebet, zusammenlegen. Diese Flexibilität
            zeigt die Barmherzigkeit und Praktikabilität unseres Glaubens.
            {"\n"}
            {"\n"}
            Vor dem Gebet führen wir eine rituelle Waschung (Wudu) durch,
            die Körper und Geist auf die Begegnung mit Allah vorbereitet. Im
            Gebet selbst gibt es folgende Stadien:
          </ThemedText>
          <ThemedText style={[styles.informationText, styles.boldText]}>
            {"\n"}
            1. Eröffnungspreisung [takbirat-ul-ihram]
            {"\n"}
            2. Stehen (qiama)
            {"\n"}
            3. Verneigung(ruku)
            {"\n"}
            4. Niederwerfung (sadschda)
            {"\n"}
            5. Bekenntisverlesung (taschahhud)
            {"\n"}
            6. Abschlussgruß (Salam)
            {"\n"}
            {"\n"}
          </ThemedText>
          <ThemedText style={styles.informationText}>
            Während des Gebets wird eine kleine Erdscheibe (Turba) bei der
            Niederwerfung verwendet. Sie erinnert an die Demut des Menschen und
            die Verbundenheit mit der Schöpfung. (Bei der Niederwerfung dann)
            Das Gebet im Islam ist mehr als eine Pflicht. Es ist ein Geschenk,
            das den Gläubigen erlaubt, inmitten des Alltags innezuhalten und
            sich auf das Wesentliche zu besinnen – die Beziehung zu Allah, die
            Quelle aller Liebe, Barmherzigkeit und Führung.
          </ThemedText>
        </ThemedView>
        <ContinueButton
          link={"/(tabs)/levels"}
          text="Fertig"
          activateNextLevelButton={false}
        />
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
    fontSize: 16,
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
