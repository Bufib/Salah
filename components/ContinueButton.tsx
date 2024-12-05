import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { router, Href } from "expo-router";
import { activateNextLevel } from "@/components/levelStore";

type ContinueButtonProps = {
  link: Href;
  text?: string;
  activateNextLevelButton: boolean;
};

const ContinueButton = ({
  link,
  text,
  activateNextLevelButton = true,
}: ContinueButtonProps) => {
  // Make next level Accessible if activateNextLevelButton === true
  const handlePress = async () => {
    if (activateNextLevelButton) {
      await activateNextLevel(); // Activate the next level if true
    }
    router.push(link);
  };

  return (
    <Pressable style={styles.pressable} onPress={() => handlePress()}>
      {text ? (
        <ThemedText style={styles.pressableText}>{text}</ThemedText>
      ) : (
        <ThemedText style={styles.pressableText}>Weiter</ThemedText>
      )}
    </Pressable>
  );
};
export default ContinueButton;

const styles = StyleSheet.create({
  pressable: {
    width: 80,
    height: 35,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: Colors.universal.continueButtonColor,
  },
  pressableText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.universal.continueButtonTextColor,
  },
});
