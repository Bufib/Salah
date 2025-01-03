import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/ThemedText";
import { coustomTheme } from "./coustomTheme";

type InformationContainerProps = {
  gender?: "boy" | "girl";
  text: string;
  imagePosition?: "left" | "right";
  bold?: boolean;
  center?: boolean;
  bigText?: boolean;
  author?: string;
};

const InformationContainer = ({
  gender,
  text,
  bold,
  center,
  bigText,
  imagePosition = "left",
  author,
}: InformationContainerProps) => {
  const themeStyles = coustomTheme();
  return (
    <View style={[styles.container, themeStyles.contrast]}>
      {gender && imagePosition === "left" ? (
        <Image
          style={gender === "boy" ? styles.boy : styles.girl}
          source={
            gender === "boy"
              ? require("@/assets/images/boy.png")
              : require("@/assets/images/girl.png")
          }
          contentFit="cover"
        />
      ) : null}
      <ThemedText
        style={[
          styles.text,
          bold && styles.boldText,
          center && styles.centerText,
          bigText && styles.bigText,
        ]}
      >
        {text}
      </ThemedText>
      {gender && imagePosition === "right" ? (
        <Image
          style={gender === "boy" ? styles.boy : styles.girl}
          source={
            gender === "boy"
              ? require("@/assets/images/boy.png")
              : require("@/assets/images/girl.png")
          }
          contentFit="cover"
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    flex: 1,
    fontSize: 18,
    lineHeight: 23,
    marginRight: 10,
    paddingLeft: 5,
  },
  boldText: {
    fontWeight: "700",
  },
  centerText: {
    textAlign: "center",
  },
  bigText: {
    fontSize: 24,
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
  authorText: {},
});

export default InformationContainer;
