import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export const lightTheme = {
  text: {
    color: Colors.light.text,
  },
  background: {
    backgroundColor: Colors.light.background,
  },
  contrast: {
    backgroundColor: Colors.light.contrast,
  },
  initialScreenTextColor: {
    color: Colors.light.initialScreenTextColor,
  },
  indexLevelBackgroundColor: {
    backgroundColor: Colors.light.indexLevelBackgroundColor,
  },
  indexLevelTextColor: {
    color: Colors.light.indexLevelTextColor,
  },

  titleSuraBackroundColor: {
    backgroundColor: Colors.light.titleSuraBackroundColor,
  },
  markdownText: {
    color: Colors.light.text,
  },
  audioButton: {
    backgroundColor: Colors.light.audioButton,
  },
};

export const darkTheme = {
  text: {
    color: Colors.dark.text,
  },
  contrast: {
    backgroundColor: Colors.dark.contrast,
  },
  background: {
    backgroundColor: Colors.dark.background,  // For ScrollView and similar to have the backgorund applied
  },
  initialScreenTextColor: {
    color: Colors.dark.initialScreenTextColor,
  },
  indexLevelBackgroundColor: {
    backgroundColor: Colors.dark.indexLevelBackgroundColor,
  },
  indexLevelTextColor: {
    color: Colors.dark.indexLevelTextColor,
  },

  titleSuraBackroundColor: {
    backgroundColor: Colors.dark.titleSuraBackroundColor,
  },
  markdownText: {
    color: Colors.dark.text,
  },
  audioButton: {
    backgroundColor: Colors.dark.audioButton,
  },
};

export const coustomTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === "light" ? lightTheme : darkTheme;
};
