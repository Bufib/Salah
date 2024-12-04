import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "./ThemedView";

type InformationContainerProps = {
  gender?: "boy" | "girl";
  text: string;
  bold?: boolean;
};

const InformationContainer = ({
  gender,
  text,
  bold,
}: InformationContainerProps) => (
  <ThemedView style={styles.container}>
    <ThemedText style={bold ? [styles.text, styles.boldText] : styles.text}>
      {text}
    </ThemedText>
    {gender && (
      <Image
        style={gender === "boy" ? styles.boy : styles.girl}
        source={
          gender === "boy"
            ? require("@/assets/images/boy.png")
            : require("@/assets/images/girl.png")
        }
        contentFit="cover"
      />
    )}
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2
  },
  text: {
    flex: 1,
    fontSize: 18,
    lineHeight: 23,
    marginRight: 10,
    paddingLeft: 5,
  },
  boldText: {
    fontWeight: "700"
  },

  boy: {
    height: 250,
    aspectRatio: 0.6,
    alignSelf: "flex-end",
  },
  girl: {
    height: 280,
    aspectRatio: 0.6,
    alignSelf: "flex-end",
  },
});

export default InformationContainer;
