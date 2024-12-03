/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    indexLevelBackgroundColor: "rgba(0, 144, 0, 1)",
    ContinueButtonColor: "#2475B0",
    // indexLevelBackgroundColor: "#2C3335",
    indexLevelTextColor: "#fff",
    titleSuraBackroundColor: "#02B943"
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    // background: "#242c40", aus IslamFragen
    // contrast: "#34495e", aus IslamFragen
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    indexLevelBackgroundColor: "rgba(0, 144, 0, 1)",
    ContinueButtonColor: "#2475B0",
    // indexLevelBackgroundColor: "#DAE0E2",
    indexLevelTextColor: "#000",
    titleSuraBackroundColor: "#019031"
  },
};
