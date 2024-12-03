import { StyleSheet, Pressable, View } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Image } from "expo-image";
import useInitialInfoStore from "@/components/userInformationStore";
import { useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import ContinueButton from "@/components/ContinueButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function start() {
  const { name, gender } = useInitialInfoStore();

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView edges={["bottom"]}>
        <ThemedView style={styles.textContainer}>
          <ThemedText style={[styles.informationText]}>
            Im Islam ist das Gebet (Salah) eine der wichtigsten Formen der
            Gottesverehrung und ein Weg, die Nähe zu Allah zu suchen. Es wird
            als eine spirituelle Reise betrachtet, die die Seele reinigt und den
            Menschen daran erinnert, wofür er geschaffen wurde. Das Gebet
            symbolisiert die Verbindung zwischen dem Schöpfer und Seiner
            Schöpfung und ist ein zentraler Bestandteil des täglichen Lebens.
            Wir Schiiten verrichten unsere fünf täglichen Gebete (Morgengebet,
            Mittagsgebet, Nachmittagsgebet, Abendgebet und Nachtgebet) in drei
            Zeiträumen, indem wir das Mittags- und Nachmittagsgebet sowie das
            Abend- und Nachtgebet, zusammenlegen. Diese Flexibilität zeigt die
            Barmherzigkeit und Praktikabilität unseres Glaubens. Vor dem Gebet
            führen wir eine rituelle Waschung (Wudu) durch, die Körper und Geist
            auf die Begegnung mit Allah vorbereitet. Im Gebet selbst gibt es
            folgende Stadien:
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
        <ContinueButton />
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
    borderColor: "rgba(0, 144, 0, 1)",
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
