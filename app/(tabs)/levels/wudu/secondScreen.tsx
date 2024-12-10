// import React from "react";
// import { coustomTheme } from "@/components/coustomTheme";
// import Spacer from "@/components/Spacer";
// import SortableGrid, { SortableImageData } from "@/components/SortableGrid";
// import { ThemedView } from "@/components/ThemedView";
// import { StyleSheet } from "react-native";
// import InformationContainer from "@/components/InformationContainer";
// import { ScrollView } from "react-native";
// import { View } from "react-native";

// // Define the correct order of the images by their IDs
// const CORRECT_ORDER = ["1", "2", "3", "4", "5"];

// // Your image data array
// const wuduData: SortableImageData[] = [
//   { id: "1", image: require("@/assets/images/boy.png") },
//   { id: "2", image: require("@/assets/images/wuduBoyWashingFace.webp") },
//   { id: "3", image: require("@/assets/images/wuduWipingArm.webp") },
//   { id: "4", image: require("@/assets/images/wuduBoyWipingHair.webp") },
//   { id: "5", image: require("@/assets/images/wuduWipingFoot.webp") },
// ];

// export default function SecondScreen() {
//   const themeStyles = coustomTheme();
  
//   return (
//     <View style={styles.container}>
//       <Spacer />
//       <Spacer />
//       <InformationContainer
//         text="Ordne die Schritte der richtigen Reinfolge nach"
//         bold={true}
//       />
//       <Spacer />
//       <SortableGrid
//         correctOrder={CORRECT_ORDER}
//         imageData={wuduData}
//         rightResultLink={"/(tabs)/levels"}
//         rightResultActivateNextLevelButton={true}
//         rightResultLinkText="Fertig"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });


import React, { useRef } from "react";
import { coustomTheme } from "@/components/coustomTheme";
import Spacer from "@/components/Spacer";
import SortableGrid, { SortableImageData } from "@/components/SortableGrid";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, ScrollView } from "react-native";
import InformationContainer from "@/components/InformationContainer";

// Richtig Reihenfolge
const CORRECT_ORDER = ["1", "2", "3", "4", "5"];

// Bilddaten
const wuduData: SortableImageData[] = [
  { id: "1", image: require("@/assets/images/boy.png") },
  { id: "2", image: require("@/assets/images/wuduBoyWashingFace.webp") },
  { id: "3", image: require("@/assets/images/wuduWipingArm.webp") },
  { id: "4", image: require("@/assets/images/wuduBoyWipingHair.webp") },
  { id: "5", image: require("@/assets/images/wuduWipingFoot.webp") },
];

export default function SecondScreen() {
  const themeStyles = coustomTheme();
  
  const scrollViewRef = useRef<ScrollView>(null);

  const handleDragStart = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.setNativeProps({ scrollEnabled: false });
    }
  };

  const handleDragEnd = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.setNativeProps({ scrollEnabled: true });
    }
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      <Spacer />
      <Spacer />
      <InformationContainer
        text="Ordne die Schritte der richtigen Reinfolge nach"
        bold={true}
      />
      <Spacer />
      <SortableGrid
        correctOrder={CORRECT_ORDER}
        imageData={wuduData}
        rightResultLink={"/(tabs)/levels"}
        rightResultActivateNextLevelButton={true}
        rightResultLinkText="Fertig"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      />
      <Spacer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
