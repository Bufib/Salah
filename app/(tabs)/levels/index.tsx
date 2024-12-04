import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Pressable,
  Animated,
} from "react-native";
import React, { useLayoutEffect, useRef, useEffect } from "react";
import { coustomTheme } from "@/components/coustomTheme";
import { router } from "expo-router";
import {
  levelButtons,
  smallerLevelButtons,
} from "@/components/levelButtonsIndex";
import capitalizeFirstLetter from "@/components/capitalizeFirstLetter";
import { useLevelStore } from "@/components/levelStore";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const themeStyles = coustomTheme();
  const { levels, loadLevels } = useLevelStore();

  // Load levels when the component mounts to check which are available to user
  useLayoutEffect(() => {
    loadLevels();
  }, []);

  // Find the last accessible level
  const accessibleLevels = levelButtons.filter((level) => levels[level]);
  const lastAccessibleLevel = accessibleLevels[accessibleLevels.length - 1];

  // Create a pulsing animation for the glow
  const glowAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [glowAnim]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/indexHeaderImage2.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView>
          <View style={styles.levelContainer}>
            {levelButtons.map((level, index) => {
              const isAccessible = levels[level];
              const isLastAccessible = lastAccessibleLevel === level;

              return (
                <View key={index} style={{ position: "relative" }}>
                  <Pressable
                    onPress={() => {
                      if (isAccessible) {
                        // @ts-ignore
                        router.push(`/(tabs)/levels/${level}`);
                      }
                    }}
                    style={({ pressed }) => [
                      styles.level,
                      smallerLevelButtons.includes(level.toLowerCase()) &&
                        styles.smallerLevel,
                      themeStyles.indexLevelBackgroundColor,
                      pressed && isAccessible && styles.levelPressed,
                      !isAccessible && styles.levelInaccessible, // Apply grey style if level is not accessible
                      isLastAccessible && styles.lastAccessibleGlow, // Apply glowing effect to the last accessible level
                      index % 2 === 1
                        ? styles.levelMoveToMiddle
                        : index % 4 === 0
                        ? styles.levelMoveToLeft
                        : styles.levelMoveToRight,
                    ]}
                  >
                    {isLastAccessible ? (
                      <Animated.View
                        style={{
                          transform: [{ scale: glowAnim }],
                        }}
                      >
                        <Text
                          style={[
                            styles.levelText,
                            themeStyles.indexLevelTextColor,
                          ]}
                        >
                          {capitalizeFirstLetter(level)}
                        </Text>
                      </Animated.View>
                    ) : (
                      <Text
                        style={[
                          styles.levelText,
                          themeStyles.indexLevelTextColor,
                        ]}
                      >
                        {capitalizeFirstLetter(level)}
                      </Text>
                    )}
                  </Pressable>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  levelContainer: {
    flexDirection: "column",
    marginTop: 50,
    marginBottom: 40,
  },
  levelInaccessible: {
    backgroundColor: Colors.universal.indexUnaccessibleLevelBackground,
    shadowColor: Colors.universal.indexShadowColorUnaccessible,
    elevation: 1,
  },
  levelPressed: {
    transform: [{ translateY: 4 }], // Move down when pressed
    shadowOffset: { width: 0, height: 0 }, // Remove shadow when pressed
    shadowOpacity: 0, // Remove shadow opacity when pressed
    elevation: 0, // Remove Android shadow when pressed
  },
  backgroundImage: {},
  level: {
    width: 160,
    height: 160,
    marginHorizontal: 10,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",

    // iOS Shadow
    shadowColor: Colors.universal.indexShadowColorAccessible,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 2,

    // Android Shadow (elevation)
    elevation: 5,
  },
  smallerLevel: {
    width: 120,
    height: 120,
  },
  levelText: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  levelMoveToRight: {
    alignSelf: "flex-end",
  },
  levelMoveToMiddle: {
    alignSelf: "center",
  },
  levelMoveToLeft: {
    alignSelf: "flex-start",
  },
  lastAccessibleGlow: {
    shadowColor: Colors.universal.indexLastLevel,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
});
