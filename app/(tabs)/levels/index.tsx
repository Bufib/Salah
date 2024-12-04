import { View, StyleSheet, ImageBackground } from "react-native";
import { coustomTheme } from "@/components/coustomTheme";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { router } from "expo-router";
import { Pressable } from "react-native";
import { levelButtons, smallerLevelButtons } from "@/components/levelButtonsIndex";
import capitalizeFirstLetter from "@/components/capitalizeFirstLetter";
import useLevelStore from "@/components/levelStore";

export default function HomeScreen() {
  const themeStyles = coustomTheme();
  const { levels, inaccessibleLevels, loadLevels, updateLevelAccess } =
    useLevelStore();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/indexHeaderImage2.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView>
          <View style={styles.levelContainer}>
            {levelButtons.map((level, index) => (
              <View key={index}>
                <Pressable
                  /** @ts-ignore */
                  onPress={() => router.push(`/(tabs)/levels/${level}`)}
                  style={({ pressed }) => [
                    styles.level,
                    smallerLevelButtons.includes(level.toLowerCase()) &&
                      styles.smallerLevel, // Apply smaller style conditionally
                    themeStyles.indexLevelBackgroundColor,
                    pressed && styles.levelPressed, // Apply pressed styles
                    index % 2 === 1
                      ? styles.levelMoveToMiddle
                      : index % 4 === 0
                      ? styles.levelMoveToLeft
                      : styles.levelMoveToRight,
                  ]}
                >
                  <Text
                    style={[styles.levelText, themeStyles.indexLevelTextColor]}
                  >
                    {capitalizeFirstLetter(level)}
                  </Text>
                </Pressable>
              </View>
            ))}
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
    shadowColor: "rgb(13, 51, 0)",
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
  line: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
  },
});
