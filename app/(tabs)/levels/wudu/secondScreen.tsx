import React from "react";
import { coustomTheme } from "@/components/coustomTheme";
import Spacer from "@/components/Spacer";
import SortableGrid, { SortableImageData } from "@/components/SortableGrid";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import InformationContainer from "@/components/InformationContainer";
// Correct order of image IDs
const CORRECT_ORDER = ["1", "2", "3", "4", "5"];

const wuduData: SortableImageData[] = [
  {
    id: "1",
    image: require("@/assets/images/boy.png"),
  },
  {
    id: "2",
    image: require("@/assets/images/wuduBoyWashingFace.webp"),
  },
  {
    id: "3",
    image: require("@/assets/images/wuduWipingArm.webp"),
  },
  {
    id: "4",
    image: require("@/assets/images/wuduBoyWipingHair.webp"),
  },
  {
    id: "5",
    image: require("@/assets/images/wuduWipingFoot.webp"),
  },
];

const SecondScreen = () => {
  const themeStyles = coustomTheme();

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <Spacer />
      <InformationContainer text="Ordne die Schritte der richtigen Reinfolge nach" bold={true}/>
      <Spacer />
      <SortableGrid
        correctOrder={CORRECT_ORDER}
        imageData={wuduData}
        rightResultLink={"/(tabs)/levels"}
        rightResultActivateNextLevelButton={true}
        rightResultLinkText="Fertig"
      />
    </ThemedView>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
