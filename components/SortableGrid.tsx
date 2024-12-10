// import React, { useState } from "react";
// import { StyleSheet, View, Pressable, Text, Dimensions } from "react-native";
// import { Image } from "expo-image";
// import ConfettiCannon from "react-native-confetti-cannon";
// import ContinueButton from "./ContinueButton";
// import { Href } from "expo-router";
// import Spacer from "./Spacer";
// import { coustomTheme } from "./coustomTheme";
// import ImageWithSpeechBubble from "./ImageWithSpeechBubble";
// import { Colors } from "@/constants/Colors";
// import { DraggableGrid } from "react-native-draggable-grid";

// export interface SortableImageData {
//   id: string;
//   image: any; // require() image or URI
// }

// interface SortableImagesProps {
//   correctOrder: string[];
//   imageData: SortableImageData[];
//   rightResultLink: Href;
//   rightResultActivateNextLevelButton: boolean;
//   rightResultLinkText: string;
//   onDragStart?: () => void;    
//   onDragEnd?: () => void; 
// }

// const { width: SCREEN_WIDTH } = Dimensions.get("window");
// const ITEM_MARGIN = 15;
// const ITEM_WIDTH = SCREEN_WIDTH / 2 - ITEM_MARGIN * 2;

// export const SortableGrid: React.FC<SortableImagesProps> = ({
//   correctOrder,
//   imageData,
//   rightResultLink,
//   rightResultActivateNextLevelButton,
//   rightResultLinkText,
// }) => {
//   // Convert imageData to the format needed by DraggableGrid (each item must have a 'key')
//   const initialData = [...imageData]
//     .sort(() => Math.random() - 0.5)
//     .map((item) => ({
//       key: item.id, // DraggableGrid requires a 'key'
//       image: item.image,
//     }));

//   const [data, setData] = useState(initialData);
//   const [rightResult, setRightResult] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const themeStyles = coustomTheme();

//   const checkIfSequenceIsRight = () => {
//     const currentOrder = data.map((item) => item.key);
//     const checkResult =
//       JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
//     setRightResult(checkResult);
//     setIsSubmitted(true);
//   };

//   const renderItem = (item: { key: string; image: any }, order: number) => {
//     let itemStyle = styles.sortableImage;
//     if (isSubmitted) {
//       if (rightResult) {
//         // Everything is correct
//         itemStyle = styles.correctItem;
//       } else {
//         // Check if this particular item is at the correct index
//         const correctIdAtPosition = correctOrder[order];
//         if (correctIdAtPosition !== item.key) {
//           itemStyle = styles.incorrectItem;
//         }
//       }
//     }

//     // No need to handle onLongPress for drag, DraggableGrid manages dragging by default.
//     return (
//       <View style={styles.imageContainer}>
//         <Image source={item.image} contentFit="contain" style={itemStyle} />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {rightResult && (
//         <View style={styles.confettiContainer}>
//           <ConfettiCannon
//             count={100}
//             origin={{ x: -10, y: 0 }}
//             fadeOut={true}
//             explosionSpeed={300}
//           />
//         </View>
//       )}

//       <View style={[styles.contentContainer, themeStyles.contrast]}>
//         <DraggableGrid
//           data={data}
//           numColumns={2}
//           renderItem={renderItem}
//           onDragRelease={(newData) => setData(newData)}
//         />
//       </View>

//       {!rightResult && (
//         <Pressable
//           style={styles.checkResultButton}
//           onPress={checkIfSequenceIsRight}
//         >
//           <Text style={styles.checkResultButtonText}>Überprüfen</Text>
//         </Pressable>
//       )}

//       <Spacer />
//       <Spacer />
//       <Spacer />

//       {rightResult && (
//         <ContinueButton
//           link={rightResultLink}
//           activateNextLevelButton={rightResultActivateNextLevelButton}
//           text={rightResultLinkText}
//         />
//       )}
//       {rightResult && (
//         <ImageWithSpeechBubble
//           text="Mashallah!"
//           top={"10%"}
//           right={"-10%"}
//           bold={true}
//           fontSize={18}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   confettiContainer: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 2,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   contentContainer: {
//     flex: 1,
//     marginHorizontal: 10,
//     padding: 10,
//     borderWidth: 2,
//     borderRadius: 10,
//   },
//   imageContainer: {
//     margin: ITEM_MARGIN,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   sortableImage: {
//     width: ITEM_WIDTH,
//     height: ITEM_WIDTH,
//     aspectRatio: 1,
//     borderWidth: 2,
//     borderRadius: 10,
//   },
//   correctItem: {
//     width: ITEM_WIDTH,
//     height: ITEM_WIDTH,
//     aspectRatio: 1,
//     borderWidth: 2,
//     borderRadius: 10,
//     borderColor: "green",
//   },
//   incorrectItem: {
//     width: ITEM_WIDTH,
//     height: ITEM_WIDTH,
//     aspectRatio: 1,
//     borderWidth: 2,
//     borderRadius: 10,
//     borderColor: "red",
//   },
//   checkResultButton: {
//     width: 120,
//     height: 35,
//     borderWidth: 2,
//     borderRadius: 5,
//     justifyContent: "center",
//     alignSelf: "flex-end",
//     marginRight: 15,
//     marginTop: 29,
//     backgroundColor: Colors.universal.checkResultSortableListButtonColor,
//   },
//   checkResultButtonText: {
//     fontSize: 20,
//     fontWeight: "600",
//     textAlign: "center",
//     color: Colors.universal.checkResultSortableListButtonTextColor,
//   },
// });

// export default SortableGrid;


import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, Dimensions } from "react-native";
import { Image } from "expo-image";
import ConfettiCannon from "react-native-confetti-cannon";
import ContinueButton from "./ContinueButton";
import { Href } from "expo-router";
import Spacer from "./Spacer";
import { coustomTheme } from "./coustomTheme";
import ImageWithSpeechBubble from "./ImageWithSpeechBubble";
import { Colors } from "@/constants/Colors";
import { DraggableGrid } from "react-native-draggable-grid";

export interface SortableImageData {
  id: string;
  image: any; // require() image or URI
}

interface SortableImagesProps {
  correctOrder: string[];
  imageData: SortableImageData[];
  rightResultLink: Href;
  rightResultActivateNextLevelButton: boolean;
  rightResultLinkText: string;
  onDragStart?: () => void;    // Neu hinzugefügt
  onDragEnd?: () => void;      // Neu hinzugefügt
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const ITEM_MARGIN = 15;
const ITEM_WIDTH = SCREEN_WIDTH / 2 - ITEM_MARGIN * 2;

export const SortableGrid: React.FC<SortableImagesProps> = ({
  correctOrder,
  imageData,
  rightResultLink,
  rightResultActivateNextLevelButton,
  rightResultLinkText,
  onDragStart,
  onDragEnd,
}) => {
  // Daten vorbereiten
  const initialData = [...imageData]
    .sort(() => Math.random() - 0.5)
    .map((item) => ({
      key: item.id, // Für DraggableGrid muss ein 'key' vorhanden sein
      image: item.image,
    }));

  const [data, setData] = useState(initialData);
  const [rightResult, setRightResult] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const themeStyles = coustomTheme();

  const checkIfSequenceIsRight = () => {
    const currentOrder = data.map((item) => item.key);
    const checkResult = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
    setRightResult(checkResult);
    setIsSubmitted(true);
  };

  const renderItem = (item: { key: string; image: any }, order: number) => {
    let itemStyle = styles.sortableImage;

    if (isSubmitted) {
      if (rightResult) {
        // Alle richtig
        itemStyle = styles.correctItem;
      } else {
        // Einzelne Items überprüfen
        const correctIdAtPosition = correctOrder[order];
        if (correctIdAtPosition !== item.key) {
          itemStyle = styles.incorrectItem;
        }
      }
    }

    return (
      <View style={styles.imageContainer}>
        <Image source={item.image} contentFit="contain" style={itemStyle} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {rightResult && (
        <View style={styles.confettiContainer}>
          <ConfettiCannon
            count={100}
            origin={{ x: -10, y: 0 }}
            fadeOut={true}
            explosionSpeed={300}
          />
        </View>
      )}

      <View style={[styles.contentContainer, themeStyles.contrast]}>
        <DraggableGrid
          data={data}
          numColumns={2}
          renderItem={renderItem}
          onDragStart={onDragStart}  // Beim Start des Drag-Vorgangs ScrollView deaktivieren
          onDragRelease={(newData) => {
            setData(newData);
            if (onDragEnd) onDragEnd(); // Beim Loslassen ScrollView wieder aktivieren
          }}
        />
      </View>

      {!rightResult && (
        <Pressable
          style={styles.checkResultButton}
          onPress={checkIfSequenceIsRight}
        >
          <Text style={styles.checkResultButtonText}>Überprüfen</Text>
        </Pressable>
      )}

      <Spacer />
      <Spacer />
      <Spacer />

      {rightResult && (
        <ContinueButton
          link={rightResultLink}
          activateNextLevelButton={rightResultActivateNextLevelButton}
          text={rightResultLinkText}
        />
      )}
      {rightResult && (
        <ImageWithSpeechBubble
          text="Mashallah!"
          top={"10%"}
          right={"-10%"}
          bold={true}
          fontSize={18}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confettiContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  imageContainer: {
    margin: ITEM_MARGIN,
    justifyContent: "center",
    alignItems: "center",
  },
  sortableImage: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 10,
  },
  correctItem: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "green",
  },
  incorrectItem: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "red",
  },
  checkResultButton: {
    width: 120,
    height: 35,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 15,
    marginTop: 29,
    backgroundColor: Colors.universal.checkResultSortableListButtonColor,
  },
  checkResultButtonText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.universal.checkResultSortableListButtonTextColor,
  },
});

export default SortableGrid;
