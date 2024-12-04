import { StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

type RenderSuraProps = {
  text: string;
};

const RenderSura = ({ text }: RenderSuraProps) => {
  return (
    <ThemedView style={styles.textContainer}>
      <ThemedText style={styles.text}>{text}</ThemedText>
    </ThemedView>
  );
};

export default RenderSura;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "rgba(0, 144, 0, 1)",
  },
  text: {
    fontSize: 18,
    lineHeight: 22,
  },
});
