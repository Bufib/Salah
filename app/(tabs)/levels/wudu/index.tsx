import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { coustomTheme } from "@/components/coustomTheme";
import { ThemedText } from "@/components/ThemedText";
import Spacer from "@/components/Spacer";
import ContinueButton from "@/components/ContinueButton";
import { Text } from "react-native";

const wuduData = [
  {
    image: require("@/assets/images/boy.png"),
    text: "Nimm die Absicht, die Gebetswasch-ung (Wudu) zu vollziehen.",
  },
  {
    image: require("@/assets/images/wuduBoyWashingFace.webp"),
    text: "Wasche dein Gesischt mit einer oder beiden Händen. Streiche dabei mit deiner rechten Hand von oben nach unten, nicht aber von unten nach oben",
  },
  {
    image: require("@/assets/images/wuduWipingArm.webp"),
    text: "Nimm mit der rechten Hand Wasser und schütte es in die linke. Dann streiche mit der linken Hand über deinen rechten Arm. Achte auch hier wieder darauf, von vorne nach hinten zu streichen. Dann Nimm Wasser wieder in deine rechte Hand und streiche über den linken Arm.",
  },
  {
    image: require("@/assets/images/wuduBoyWipingHair.webp"),
    text: "Streiche dann mit deiner rechten Hand von der mitte deines Kopfes bis zu deinem Haaransatz.",
  },
  {
    image: require("@/assets/images/wuduWipingFoot.webp"),
    text: "Streiche dann mit der rechten Hand über dein rechten Fuß, von den Zehenspitzen beginnend bis zum ende deins Fußes. Wiederhole das gleiche mit der linken Hand.",
  },
];

const Wudu = () => {
  const themeStyles = coustomTheme();

  return (
    <ScrollView style={[styles.container, themeStyles.background]}>
      <Spacer />
      <View style={styles.contentContainer}>
        {wuduData.map((stage, index) => (
          <View key={index} style={[styles.wuduStageContainer, themeStyles.contrast]}>
            <ThemedText style={styles.stageText}>Schritt {index + 1}</ThemedText>
            <View
              key={index}
              style={[styles.wuduStageContent, themeStyles.contrast]}
            >
              <Image
                source={stage.image}
                contentFit="contain"
                style={styles.wuduImage}
              />

              <ThemedText style={styles.wuduText}>{stage.text}</ThemedText>
            </View>
          </View>
        ))}
      </View>
      <Spacer />
      <ContinueButton
        activateNextLevelButton={false}
        text="Weiter"
        link={"/(tabs)/levels/wudu/secondScreen"}
      />
      <Spacer />
    </ScrollView>
  );
};

export default Wudu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
  },
  wuduStageContainer: {
    flexDirection: "column",
  },

  stageText: {
    fontSize: 19,
    fontWeight: "700",
    paddingTop: 5,
    paddingLeft: 10
  },

  wuduStageContent: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    padding: 7,
  },
  wuduImage: {
    width: 250,
    height: "auto",
    aspectRatio: 1,
    borderWidth: 2,
  },

  wuduText: {
    fontSize: 18,
    flexShrink: 1,
    flexWrap: "wrap",
  },
});
