import { StyleSheet, Pressable, View } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import ContinueButton from "@/components/ContinueButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import Spacer from "@/components/Spacer";
import { UIManager, Platform } from "react-native";

export default function start() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView edges={["bottom"]}>
        <ThemedView style={styles.textContainer}>
          <ThemedText style={styles.informationText}>
            Im Gebet selbst gibt es folgende Stadien
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
            die Verbundenheit mit der Schöpfung.
            {"\n"}
            {"\n"}
            Das Gebet im Islam ist mehr als eine Pflicht. Es ist ein Geschenk,
            das den Gläubigen erlaubt, inmitten des Alltags innezuhalten und
            sich auf das Wesentliche zu besinnen – die Beziehung zu Allah, die
            Quelle aller Liebe, Barmherzigkeit und Führung.
          </ThemedText>
        </ThemedView>
        <Spacer />
        <ContinueButton
          link={"/(tabs)/levels"}
          text="Fertig"
          activateNextLevelButton={true}
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
