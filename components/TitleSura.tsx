import { StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { coustomTheme } from "./coustomTheme";

type titleSuraProps = {
  text: string;
};
const TitleSura = ({ text }: titleSuraProps) => {
  const themeStyles = coustomTheme();
  return (
    <ThemedView
      style={[styles.titleSuraContainer, themeStyles.titleSuraBackroundColor]}
    >
      <ThemedText style={styles.titleSuraText}>{text}</ThemedText>
    </ThemedView>
  );
};

export default TitleSura;

const styles = StyleSheet.create({
  titleSuraContainer: {
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 10,
  },
  titleSuraText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
});
