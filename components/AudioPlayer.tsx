import { StyleSheet, Pressable, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Audio } from "expo-av";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "react-native";
import { usePathname } from "expo-router";
import { coustomTheme } from "./coustomTheme";
import Spacer from "./Spacer";

type audioPlayerTypes = {
  audioSource: any;
  textData: { time: number; text: string }[];
};

const AudioPlayer = ({ audioSource, textData }: audioPlayerTypes) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const themestyles = coustomTheme();
  const colorScheme = useColorScheme();

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const pathname = usePathname();

  // Stops and unload function if user navigates to different file
  useEffect(() => {
    // Function to unload the audio and reset it
    const stopAndUnloadAudio = async () => {
      if (sound) {
        await sound.pauseAsync(); // Pause the audio if playing
        await sound.unloadAsync(); // Unload audio to free resources
        setSound(null); // Clean up the sound object
        setCurrentTime(0); // Reset the current time to 0
        setIsFinished(false); // Reset the finished state
      }
    };

    // Trigger the cleanup when the component is unmounted or the route changes
    return () => {
      stopAndUnloadAudio();
    };
  }, [pathname, sound]);

  const loadAndPlayAudio = async () => {
    try {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded) {
          if (isFinished) {
            // If the audio has finished, reset and play from the beginning
            await sound.setPositionAsync(0);
            await sound.playAsync();
            setCurrentTime(0);
            setIsFinished(false);
            return;
          } else if (!status.isPlaying) {
            // Resume if the sound is loaded and currently paused
            await sound.playAsync();
            setIsFinished(false);
            return;
          } else {
            // Audio is already playing; do nothing
            return;
          }
        }
      }

      // If no sound is loaded, load a new audio file
      const { sound: audioSound } = await Audio.Sound.createAsync(
        audioSource,
        { shouldPlay: false },
        updatePlaybackStatus
      );
      setSound(audioSound);
      setIsFinished(false);

      // Set the audio position to currentTime if it's greater than 0
      if (currentTime > 0) {
        await audioSound.setPositionAsync(currentTime * 1000); // Convert seconds to milliseconds
      }

      // Play the audio from the current position
      await audioSound.playAsync();
    } catch (error) {
      console.error("Error loading audio file:", error);
    }
  };

  const goBack3Seconds = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded && status.positionMillis) {
        // Calculate the new position (subtract 3 seconds but don't go below zero)
        const newPosition = Math.max(status.positionMillis - 3000, 0);
        await sound.setPositionAsync(newPosition);
        setCurrentTime(newPosition / 1000); // Update the current time state to adjust the highlighted text
      } else {
        // If sound is not loaded, simply adjust the currentTime state
        setCurrentTime(Math.max(currentTime - 3, 0)); // Ensure it doesn't go below zero
      }
    } else {
      // If sound is null, simply adjust the currentTime state
      setCurrentTime(Math.max(currentTime - 3, 0)); // Ensure it doesn't go below zero
    }
  };

  const goForward3Seconds = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded && status.positionMillis && status.durationMillis) {
        // Calculate the new position (add 3 seconds but don't exceed the audio duration)
        const newPosition = Math.min(
          status.positionMillis + 3000,
          status.durationMillis
        );
        await sound.setPositionAsync(newPosition);
        setCurrentTime(newPosition / 1000); // Update the current time state to adjust the highlighted text
      } else {
        // If sound is not loaded, simply adjust the currentTime state
        setCurrentTime(
          Math.min(currentTime + 3, textData[textData.length - 1].time)
        ); // Ensure it doesn't exceed the duration
      }
    } else {
      // If sound is null, simply adjust the currentTime state
      setCurrentTime(
        Math.min(currentTime + 3, textData[textData.length - 1].time)
      ); // Ensure it doesn't exceed the duration
    }
  };

  const stopAudio = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        await sound.pauseAsync(); // Pause the audio instead of stopping it
      }
    }
  };

  const resetAudio = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        await sound.setPositionAsync(0); // Set playback position to the beginning
        setCurrentTime(0); // Reset the current time to 0
        setIsFinished(false);
      }
    } else {
      setCurrentTime(0); // Reset the current time to 0
      setIsFinished(false);
    }
  };

  const updatePlaybackStatus = (status: any) => {
    if (status.isLoaded) {
      if (status.didJustFinish) {
        setIsFinished(true); // Set the state to finished when the audio completes
        setCurrentTime(0); // Reset the current time to 0
      } else if (status.positionMillis) {
        setCurrentTime(status.positionMillis / 1000); // Convert milliseconds to seconds
      }
    }
  };

  const renderText = () => {
    let activeIndex = -1;

    // Find the index of the last verse that should be highlighted based on currentTime
    for (let i = 0; i < textData.length; i++) {
      if (currentTime >= textData[i].time) {
        activeIndex = i;
      } else {
        break;
      }
    }

    return textData.map((item, index) => {
      const isActive = index === activeIndex;
      return (
        <ThemedText
          key={index}
          style={[styles.suraText, isActive ? styles.highlightedText : null]}
        >
          {item.text}
        </ThemedText>
      );
    });
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={[styles.suraContainer, themestyles.contrast]}>
        {renderText()}
        <Spacer />
        <View style={styles.audioControlContainer}>
          <Pressable onPress={resetAudio} style={styles.resetButton}>
            {colorScheme === "light" ? (
              <Ionicons name="repeat-sharp" size={27} color="black" />
            ) : (
              <Ionicons name="repeat-sharp" size={27} color="white" />
            )}
          </Pressable>
          <Pressable onPress={goBack3Seconds} style={styles.backButton}>
            {colorScheme === "light" ? (
              <Ionicons
                name="play-back-circle-outline"
                size={30}
                color="black"
              />
            ) : (
              <Ionicons
                name="play-back-circle-outline"
                size={30}
                color="white"
              />
            )}
          </Pressable>
          <Pressable onPress={loadAndPlayAudio} style={styles.playButton}>
            {colorScheme === "light" ? (
              <AntDesign name="playcircleo" size={24} color="black" />
            ) : (
              <AntDesign name="playcircleo" size={24} color="white" />
            )}
          </Pressable>
          <Pressable onPress={stopAudio} style={styles.stopButton}>
            {colorScheme === "light" ? (
              <Ionicons name="stop-circle-outline" size={30} color="black" />
            ) : (
              <Ionicons name="stop-circle-outline" size={30} color="white" />
            )}
          </Pressable>

          <Pressable onPress={goForward3Seconds} style={styles.forwardButton}>
            {colorScheme === "light" ? (
              <Ionicons
                name="play-forward-circle-outline"
                size={30}
                color="black"
              />
            ) : (
              <Ionicons
                name="play-forward-circle-outline"
                size={30}
                color="white"
              />
            )}
          </Pressable>
        </View>
        <Spacer />
      </ThemedView>
    </ScrollView>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  suraContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  suraText: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 18,
    lineHeight: 25,
  },
  highlightedText: {
    color: "rgba(0, 144, 0,1.0)", // Highlight color
    fontWeight: "bold",
  },
  audioControlContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: "auto",
    padding: 10,
    borderWidth: 2,
    borderRadius: 15,
  },
  resetButton: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  playButton: {
    paddingRight: 10,
  },
  stopButton: {
    paddingRight: 10,
  },
  backButton: {
    paddingRight: 10,
  },
  forwardButton: {
    paddingRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
