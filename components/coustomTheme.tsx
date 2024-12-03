import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export const lightTheme = {
  text: {
    color: Colors.light.text,
  },
  indexLevelBackgroundColor: {
    backgroundColor: Colors.light.indexLevelBackgroundColor,
  },
  indexLevelTextColor: {
    color: Colors.light.indexLevelTextColor,
  },
  ContinueButtonColor: {
    backgroundColor: Colors.light.ContinueButtonColor,
  },
  ContinueButtonTextColor: {
    color: "#ffffff",
  },
};

export const darkTheme = {
  text: {
    color: Colors.dark.text,
  },
  indexLevelBackgroundColor: {
    backgroundColor: Colors.dark.indexLevelBackgroundColor,
  },
  indexLevelTextColor: {
    color: Colors.dark.indexLevelTextColor,
  },
  ContinueButtonColor: {
    backgroundColor: Colors.dark.ContinueButtonColor,
  },
  ContinueButtonTextColor: {
    color: "#ffffff",
  },
};

export const coustomTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === "light" ? lightTheme : darkTheme;
};
