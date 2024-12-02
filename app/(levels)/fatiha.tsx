import { StyleSheet, Pressable, View } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import { fatihaText } from "@/components/suren";
import { Image } from "expo-image";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "react-native";

export default function fatiha() {
  const [gender, setGender] = useState("");
  const colorScheme = useColorScheme();
  useLayoutEffect(() => {
    const getGender = async () => {
      const userGender = await AsyncStorage.getItem("gender");
      setGender(userGender ?? "");
    };
    getGender();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {gender === "boy" && (
          <Image
            style={styles.imageGirl}
            source={
              colorScheme === "light"
                ? require("@/assets/images/fatihaBoyLight.png")
                : require("@/assets/images/fatihaBoyDark.png")
            }
            contentFit='contain'
          />
        )}
        {gender === "girl" && (
          <Image
            style={styles.imageGirl}
            source={
              colorScheme === "light"
                ? require("@/assets/images/fatihaGirlLight.png")
                : require("@/assets/images/fatihaGirlDark.png")
            }
            contentFit='contain'
          />
        )}
      </View>

      <AudioPlayer
        audioSource={require("@/assets/audio/suraFatihaMale.mp3")}
        textData={fatihaText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    marginTop: -100,
    marginBottom: -100
  },
  imageGirl: {
    width: 500,
    aspectRatio: 1,
  },
  imageBoy: {
    width: 500,
    aspectRatio: 1,
  },
});
