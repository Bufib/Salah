import React, { Component, useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import Checkbox from "expo-checkbox";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import genderOptions from "@/components/genderOptions";
import { TouchableWithoutFeedback } from "react-native";
import { coustomTheme } from "@/components/coustomTheme";

export default function initialScreen() {
  const [name, onChangeName] = useState("");
  const [gender, setGender] = useState("");
  const colorScheme = useColorScheme();
  const animatedValue = useSharedValue(500); // Starting off-screen to the right
  const themeStyles = coustomTheme();

  // Trigger the animation when the gender is selected
  useEffect(() => {
    if (gender) {
      // Reset the animation to the starting position
      animatedValue.value = 500;

      // Start the animation to bring the image into view
      animatedValue.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
    }
  }, [gender]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animatedValue.value }],
    };
  });

  // Save in Asycstorage so screen only shown once
  const setInitialInformationInAsyncStorage = async () => {
    try {
      if (name !== "" && (gender === "boy" || gender === "girl")) {
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("gender", gender);
        router.replace("/(tabs)/levels");
      } else {
        console.error("Name or gender is missing or invalid");
      }
    } catch (error) {
      console.error("Error saving initial information:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ThemedView style={styles.container}>
          <View style={[styles.contentContainer, themeStyles.contrast]}>
            <View style={styles.askNameContainer}>
              <TextInput
                style={[styles.askNameInput, themeStyles.initialScreenTextColor]}
                onChangeText={onChangeName}
                value={name}
                placeholder="Mein Name lautet"
              />
            </View>
            <View style={styles.askGenderContainer}>
              <ThemedText style={styles.askGenderText}>Ich bin ein:</ThemedText>
              <View style={styles.selectGenderOuterContainer}>
                {genderOptions.map((option) => (
                  <View
                    key={option.value}
                    style={styles.selectGenderInnerContainer}
                  >
                    <Checkbox
                      style={styles.selectGender}
                      value={gender === option.value}
                      onValueChange={() => setGender(option.value)}
                      color={
                        gender === option.value
                          ? "rgba(0, 144, 0, 1)"
                          : undefined
                      }
                    />
                    <ThemedText style={styles.genderLable}>
                      {option.lable}
                    </ThemedText>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <Pressable
            style={[
              styles.startButton,
              (!gender || name === "") && styles.buttonDisabled,
            ]}
            onPress={() => setInitialInformationInAsyncStorage()}
          >
            <ThemedText
              style={[
                styles.startButtonText,
                (!gender || name === "") && styles.buttonTextDisabled,
              ]}
            >
              Los gehts!
            </ThemedText>
          </Pressable>
          <View style={styles.imageContainer}>
            {gender === "boy" && (
              <Animated.View style={animatedStyle}>
                <Image
                  style={styles.imageBoy}
                  source={
                    colorScheme === "light"
                      ? require("@/assets/images/salamBoyLight.png")
                      : require("@/assets/images/salamBoyDark.png")
                  }
                  contentFit="contain"
                />
              </Animated.View>
            )}
            {gender === "girl" && (
              <Animated.View style={animatedStyle}>
                <Image
                  style={styles.imageGirl}
                  source={
                    colorScheme === "light"
                      ? require("@/assets/images/salamGirlLight.png")
                      : require("@/assets/images/salamGirlDark.png")
                  }
                  contentFit="contain"
                />
              </Animated.View>
            )}
          </View>
        </ThemedView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  contentContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    gap: 20,
    borderRadius: 15,
  },

  askNameContainer: {
    marginTop: 10,
  },
  askNameInput: {
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  askGenderContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 15,
  },
  askGenderText: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  selectGenderOuterContainer: {
    flexDirection: "row",
    gap: 30,
  },
  selectGenderInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  selectGender: {},
  genderLable: {
    fontSize: 16,
    marginLeft: -5,
  },
  startButton: {
    width: "30%",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginLeft: 20,
    backgroundColor: "rgba(0, 144, 0, 1)",
  },
  buttonDisabled: {
    backgroundColor: "rgba(0, 144, 0, 0.2)",
  },
  buttonTextDisabled: {
    fontWeight: "700",
    textAlign: "center",
    opacity: 0.1,
  },
  startButtonText: {
    fontWeight: "700",
    textAlign: "center",
  },
  imageContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  imageBoy: {
    width: 450,
    aspectRatio: 1,
    position: "absolute",
    bottom: -110,
    right: -135,
    transform: [{ rotate: "-10deg" }],
  },
  imageGirl: {
    width: 450,
    aspectRatio: 1,
    position: "absolute",
    bottom: -120,
    right: -150,
    transform: [{ rotate: "-10deg" }],
  },
});
