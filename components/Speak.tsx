import React from "react";
import { View, StyleSheet, Button } from "react-native";
import * as Speech from "expo-speech";

type SpeakProps = {
  textToSpeak: string;
};
export default function Speak({ textToSpeak }: SpeakProps) {
  const speak = () => {
    const thingToSay = "مرحبا بك"; 
    Speech.speak(thingToSay, {
      language: "ar-SA", // Arabic language
      pitch: 1.0,
      rate: 1.0,
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Speak in Arabic" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
