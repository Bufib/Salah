import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Image } from "expo-image";

const about = () => {
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.aboutContainer}>
          <ThemedText style={styles.aboutText}>
            Islam-Fragen ist die erste deutschsprachige Anwendung, in der eine
            Vielzahl der häufig gestellten islamischen Fragen in den
            verschiedensten Wissensgebieten nach schiitischer Ansicht
            beantwortet werden.
            {"\n"}
            {"\n"}
            Die App ist ein Projekt des Bund für islamische Bildung (BufiB) und
            wird von einer Gruppe deutschsprachiger islamischer Theologen
            geleitet. Die Antworten basieren auf vertrauenswürdigen Quellen. Die
            Rechtsurteile stammen entweder aus den Regelwerken (risalah
            'amaliyyah) der Rechtsgelehrten oder ihren Büros.
            {"\n"}
            {"\n"}
            Wir erhoffen uns, mit Gottes Erlaubnis, mit dieser App dem großen
            Bedarf nach der Beantwortung von Glaubens- und Rechtsfragen
            nachkommen zu können und in Zukunft Antworten auf die häufig
            gestellten Fragen bereitzustellen.
            {"\n"}
            {"\n"}
            Die Beantwortung der Rechtsfragen erfolgt in erster Linie gemäß der
            Rechtsprechung der beiden Großgelehrten Sayid Ali al-Khamenei (h.)
            und Sayid Ali as-Sistani (h.), da sie im deutschsprachigen Raum die
            meisten Befolger haben. Leider ist es uns zeitlich gesehen nicht
            möglich die Rechtsprechung bereits verstorbener Rechtsgelehrter zu
            berücksichtigen und bitten dafür um Verständnis.
            {"\n"}
            {"\n"}
            Möge Allah, der Erhabene, diese bescheidenen Anstrengungen annehmen.
          </ThemedText>
          <ThemedView style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/bufibLogo.png")}
              style={styles.image}
              contentFit="contain"
            />
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

export default about;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "transparent",
  },
  aboutContainer: {
    marginHorizontal: 15,
    marginBottom: 40,
    marginTop: 20,
  },
  aboutText: {
    fontSize: 20,
  },
  imageContainer: {
    marginTop: 10,
    alignItems: "center"
  },
  image: {
    height: 200,
    width: 300
  },
});
