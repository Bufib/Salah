import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

type ImageWithSpeechBubbleProps = {
  top: number | string;
  bottom: number | string;
  left: number | string;
  right: number | string;
  text: string;
  fontSize: number;
  bold: boolean;
};
const ImageWithSpeechBubble = ({
  top,
  bottom,
  left,
  right,
  text,
  fontSize = 16,
  bold = false,
}: ImageWithSpeechBubbleProps) => {
  return (
    // @ts-ignore
    //  Ignore becausae position can be % or number
    <View style={[styles.container, { top, bottom, left, right }]}>
      {/* Speech Bubble */}
      <View style={styles.speechContainer}>
        {/* Main Bubble */}
        <ThemedView style={styles.speechBubble}>
          <ThemedText
            style={[
              styles.speechText,
              { fontSize, fontWeight: bold ? "bold" : "normal" },
            ]}
          >
            {text}
          </ThemedText>
        </ThemedView>
      </View>
      {/* Character Image */}
      <Image
        source={require("@/assets/images/boy.png")} // Update with your image path
        style={styles.characterImage}
        contentFit="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    transform: [{ rotate: "-10deg" }],
    zIndex: -1
  },
  characterImage: {
    height: 200,
    aspectRatio: 0.6,
  },
  speechContainer: {
    marginLeft: 10,
    backgroundColor: "transparent",
  },
  speechBubble: {
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  speechText: {},
});

export default ImageWithSpeechBubble;