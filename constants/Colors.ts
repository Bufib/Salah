/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */


const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    initialScreenTextColor: "rgba(0, 144, 0, 1)",
    background: "#ecf0f1",
    contrast: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    indexLevelBackgroundColor: "rgba(0, 144, 0, 1)",
    indexLevelTextColor: "#fff",
    titleSuraBackroundColor: "#02B943",
     audioButton: "#99AAAB"
  },
  dark: {
    text: "#ECEDEE",
    initialScreenTextColor: "#45CE30",
    background: "#242c40", 
    contrast: "#34495e",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    indexLevelBackgroundColor: "rgba(0, 144, 0, 1)",
    indexLevelTextColor: "#000",
    titleSuraBackroundColor: "#019031",
    audioButton: "#586776"
  },
  universal: {
    indexUnaccessibleLevelBackground: "#d3d3d3",
    indexLastLevel: "rgba(255, 215, 0, 1)",
    indexShadowColorAccessible: "rgb(13, 51, 0)",
    indexShadowColorUnaccessible: "rgba(0, 0, 0, 0.3)",
    startBorderColor: "rgba(0, 144, 0, 1)",
    continueButtonColor: "#2475B0",
    continueButtonTextColor: "#fff",
    checkResultSortableListButtonColor: "#2475B0",
    checkResultSortableListButtonTextColor: "#fff",
    sortableListRightOrder: "#45CE30",
    sortableListWrongOrder: "#FF3E4D",
    sortableListIsActiv: "#f0f0f0",
    sortableListIsNotActiv: "#ffffff",
    tabbarBackgroundLight: "#fff",
    tabbarBackgroundDark: "#121212",
    tabbarBackgroundTopLight: "#ccc",
    tabbarBackgroundTopDark: "#333",
    link: "rgb(10, 132, 255)",

  },
};
