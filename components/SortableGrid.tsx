import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Pressable,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { DragSortableView } from "react-native-drag-sort";
import ConfettiCannon from "react-native-confetti-cannon";
import { Colors } from "@/constants/Colors";
import ContinueButton from "./ContinueButton";
import { Href } from "expo-router";
import Spacer from "./Spacer";
import { coustomTheme } from "./coustomTheme";
import ImageWithSpeechBubble from "./ImageWithSpeechBubble";

// Generic type for image data
export interface SortableImageData {
  id: string;
  image: number; // React Native requires number type for require()
}

// Props interface
interface SortableImagesProps {
  correctOrder: string[];
  imageData: SortableImageData[];
  rightResultLink: Href;
  rightResultActivateNextLevelButton: boolean;
  rightResultLinkText: string;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const ITEM_WIDTH = (SCREEN_WIDTH - 40) / 2;

export const SortableGrid: React.FC<SortableImagesProps> = ({
  correctOrder,
  imageData,
  rightResultLink,
  rightResultActivateNextLevelButton,
  rightResultLinkText,
}) => {
  // Randomize initial order
  const [data, setData] = useState<SortableImageData[]>(() => {
    return [...imageData].sort(() => Math.random() - 0.5);
  });

  const [rightResult, setRightResult] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const themeStyles = coustomTheme();

  const checkIfSequenceIsRight = () => {
    const currentOrder = data.map((item) => item.id);
    const checkResult =
      JSON.stringify(currentOrder) === JSON.stringify(correctOrder);

    setRightResult(checkResult);
    setIsSubmitted(true);
  };

  const renderItem = (item: SortableImageData, index: number) => {
    const itemStyle = isSubmitted
      ? rightResult
        ? styles.correctItem
        : correctOrder[index] !== item.id
        ? styles.incorrectItem
        : styles.sortableImage
      : styles.sortableImage;

    return (
      <View style={styles.imageContainer} key={item.id}>
        <Image source={item.image} contentFit="contain" style={itemStyle} />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} >
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
        <DragSortableView
          dataSource={data}
          parentWidth={SCREEN_WIDTH - 20}
          childrenWidth={ITEM_WIDTH}
          childrenHeight={ITEM_WIDTH}
          keyExtractor={(item: SortableImageData) => item.id}
          renderItem={renderItem}
          sortable={!isSubmitted || !rightResult}
          onDataChange={(updatedData) => setData(updatedData)}
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
    </ScrollView>
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
    zIndex: 2, // ContinueButton is zIndex: 3
    justifyContent: "center",
    alignItems: "center",
  },

  contentContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  imageContainer: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    marginBottom: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  sortableImage: {
    width: ITEM_WIDTH - 10,
    height: ITEM_WIDTH - 10,
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 10,
  },
  correctItem: {
    width: ITEM_WIDTH - 10,
    height: ITEM_WIDTH - 10,
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "green",
  },
  incorrectItem: {
    width: ITEM_WIDTH - 10,
    height: ITEM_WIDTH - 10,
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
