import { StyleSheet, Pressable, View } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import { fatihaText } from "@/components/suren";
import { Image } from "expo-image";
import useInitialInfoStore from "@/components/userInformationStore";
import { useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";

export default function start() {
  const { name, gender } = useInitialInfoStore();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.readableContent}>
        <View style={styles.imageTextContainer}>
          <View style={styles.textContainer}>
            <ThemedText style={[styles.informationText, styles.textLeft]}>
              Im Islam ist das Gebet (Salah) eine der wichtigsten Formen der
              Gottesverehrung und ein Weg, die Nähe zu Allah zu suchen. Es wird
              als eine spirituelle Reise betrachtet, die die Seele reinigt und
              den Menschen daran erinnert, wofür er geschaffen wurde. Das Gebet
              symbolisiert die Verbindung zwischen dem Schöpfer und Seiner
              Schöpfung und ist ein zentraler Bestandteil des täglichen Lebens.
              Wir Schiiten verrichten unsere fünf täglichen Gebete (Morgengebet,
              Mittagsgebet, Nachmittagsgebet, Abendgebet und Nachtgebet) in drei
              Zeiträumen, indem wir das Mittags- und Nachmittagsgebet sowie das
              Abend- und Nachtgebet, zusammenlegen. Diese Flexibilität zeigt die
              Barmherzigkeit und Praktikabilität unseres Glaubens. Vor dem Gebet
              führen wir eine rituelle Waschung (Wudu) durch, die Körper und
              Geist auf die Begegnung mit Allah vorbereitet. Im Gebet selbst
              gibt es folgende Stadien:
            </ThemedText>
          </View>
          {gender && (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={
                  gender === "boy"
                    ? require("@/assets/images/boy.png")
                    : require("@/assets/images/girl.png")
                }
                contentFit="contain"
              />
            </View>
          )}
        </View>
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
          die Verbundenheit mit der Schöpfung. (Bei der Niederwerfung dann) Das
          Gebet im Islam ist mehr als eine Pflicht. Es ist ein Geschenk, das den
          Gläubigen erlaubt, inmitten des Alltags innezuhalten und sich auf das
          Wesentliche zu besinnen – die Beziehung zu Allah, die Quelle aller
          Liebe, Barmherzigkeit und Führung.
        </ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  readableContent: {
    flex: 1,
    paddingHorizontal: 15,
  },
  imageTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  textContainer: {
    flex: 3,
    marginRight: 10,
  },
  textLeft: {
    alignSelf: "flex-start",
  },
  informationText: {
    fontSize: 14,
  },
  boldText: {
    fontWeight: "700",
  },

  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
});
