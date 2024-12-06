import { StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { View } from "react-native";
import { coustomTheme } from "./coustomTheme";

type RenderSuraProps = {
  text: string;
};

const RenderSura = ({ text }: RenderSuraProps) => {
  const themestyles = coustomTheme()
  return (
    <View style={[styles.textContainer, themestyles.contrast]}>
      <ThemedText style={styles.text}>{text}</ThemedText>
    </View>
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
