// import { View, StyleSheet, ImageBackground } from "react-native";
// import { coustomTheme } from "@/components/coustomTheme";
// import { Text } from "react-native";
// import { ScrollView } from "react-native";
// import { Link, router } from "expo-router";
// import { Pressable } from "react-native";
// import levels from "@/components/indexLevels";
// import capitalizeFirstLetter from "@/components/capitalizeFirstLetter";

// export default function HomeScreen() {
//   const themeStyles = coustomTheme();

//   return (
//     <View style={[styles.container, themeStyles.indexBackgroundColor]}>
//       <ImageBackground
//         source={require("@/assets/images/indexHeaderImage2.png")}
//         resizeMode='cover'
//         style={styles.backgroundImage}
//       >
//         <ScrollView>
//           <View style={styles.levelContainer}>
//             {levels.map((level, index) => (
//               <Pressable
//                 key={index}
//                 /** @ts-ignore */
//                 onPress={() => router.push(`/(levels)/${level}`)}
//               >
//                 <View
//                   style={[
//                     styles.level,
//                     themeStyles.indexLevelBackgroundColor,
//                     index % 2 === 0
//                       ? styles.levelMoveToLeft
//                       : styles.levelMoveToRight,
//                   ]}
//                 >
//                   <Text
//                     style={[styles.levelText, themeStyles.indexLevelTextColor]}
//                   >
//                     {capitalizeFirstLetter(level)}
//                   </Text>
//                 </View>
//               </Pressable>
//             ))}
//           </View>
//         </ScrollView>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   levelContainer: {
//     flexDirection: "column",
//     marginTop: 50,
//     marginBottom: 40,
//   },

//   backgroundImage: {},
//   level: {
//     width: 120,
//     height: 120,
//     borderRadius: 99,
//     justifyContent: "center",
//     alignItems: "center",

//     // Move from the outer wall
//     marginHorizontal: 10,
//   },
//   levelText: {
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   levelMoveToRight: {
//     alignSelf: "flex-end",
//   },
//   levelMoveToLeft: {
//     alignSelf: "flex-start",
//   },
// });

import { View, StyleSheet, ImageBackground } from "react-native";
import { coustomTheme } from "@/components/coustomTheme";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { router } from "expo-router";
import { Pressable } from "react-native";
import levels from "@/components/indexLevels";
import capitalizeFirstLetter from "@/components/capitalizeFirstLetter";

export default function HomeScreen() {
  const themeStyles = coustomTheme();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/indexHeaderImage2.png")}
        resizeMode='cover'
        style={styles.backgroundImage}
      >
        <ScrollView>
          <View style={styles.levelContainer}>
            {levels.map((level, index) => (
              <View key={index}>
                <Pressable
                  /** @ts-ignore */
                  onPress={() => router.push(`/(levels)/${level}`)}
                >
                  <View
                    style={[
                      styles.level,
                      themeStyles.indexLevelBackgroundColor,
                      index % 2 === 1
                        ? styles.levelMoveToMiddle
                        : index % 4 === 0
                        ? styles.levelMoveToLeft
                        : styles.levelMoveToRight,
                    ]}
                  >
                    <Text
                      style={[
                        styles.levelText,
                        themeStyles.indexLevelTextColor,
                      ]}
                    >
                      {capitalizeFirstLetter(level)}
                    </Text>
                  </View>
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
  backgroundImage: {},
  level: {
    width: 120,
    height: 120,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,

    // iOS Shadow
    shadowColor: "rgb(13, 51, 0)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,

    // Android Shadow (elevation)
    elevation: 5,
  },
  levelText: {
    fontSize: 14,
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
