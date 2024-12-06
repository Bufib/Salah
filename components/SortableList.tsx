import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import shuffledTextArray from "./shuffleTextArray";
import { Colors } from "@/constants/Colors";
import ContinueButton from "./ContinueButton";
import { Href } from "expo-router";
import Spacer from "./Spacer";
import ConfettiCannon from "react-native-confetti-cannon";
import useGetUserInformation from "@/components/useGetUserInformation";
import ImageWithSpeechBubble from "./ImageWithSpeechBubble";

interface SortableListProps {
  data: string[];
  rightResultLink?: Href;
  rightResultLinkText?: string;
  rightResultActivateNextLevelButton?: boolean;
}

const SortableList = ({
  data,
  rightResultLink,
  rightResultLinkText,
  rightResultActivateNextLevelButton,
}: SortableListProps) => {
  const checkIfSequenceIsRight = () => {
    const results = items.map(
      (item, index) => item.trim() === data[index].trim()
    );

    setResults(results);
    setRightResult(!results.includes(false));
    setSubmit(true);
  };

  // Shuffle Data randomly every time this component is used via shuffledTextArray
  const [items, setItems] = useState(shuffledTextArray(data));
  const [results, setResults] = useState<boolean[]>([]);
  const [rightResult, setRightResult] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);

  const { name, gender, userLoading } = useGetUserInformation();

  const renderItem = ({ item, drag, isActive }: RenderItemParams<string>) => {
    return (
      <View style={styles.listItemsContainer}>
        <Pressable
          style={[
            styles.listItem,
            {
              backgroundColor: submit
                ? results[items.indexOf(item)]
                  ? Colors.universal.sortableListRightOrder
                  : Colors.universal.sortableListWrongOrder
                : isActive
                ? Colors.universal.sortableListIsActiv
                : Colors.universal.sortableListIsNotActiv,
            },
          ]}
          onLongPress={!rightResult ? drag : undefined}
        >
          {/* Drag items as long as right result not achieved */}
          <Text style={styles.itemText} selectable={false}>
            {item}
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {rightResult && (
        <ConfettiCannon
          count={100}
          origin={{ x: -99, y: 0 }}
          fadeOut={true}
          explosionSpeed={300}
        />
      )}
      <DraggableFlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => `item-${index}`}
        onDragEnd={({ data }) => setItems(data)}
        containerStyle={{ flex: 1 }}
      />
      <Spacer />
      {rightResult &&
      rightResultLink &&
      rightResultLinkText &&
      rightResultActivateNextLevelButton ? (
        <ContinueButton
          link={rightResultLink}
          text={rightResultLinkText}
          activateNextLevelButton={rightResultActivateNextLevelButton}
        />
      ) : (
        <Pressable
          style={styles.checkResultButton}
          onPress={() => checkIfSequenceIsRight()}
        >
          <ThemedText style={styles.checkResultButtonText}>
            Überprüfen
          </ThemedText>
        </Pressable>
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
      <Spacer />
      <Spacer />
    </View>
  );
};

export default SortableList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItemsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  listItemsIcons: {
    width: 30,
    height: "auto",
    marginRight: 20,
    alignItems: "center",
  },
  listItem: {
    flex: 1,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  itemText: {
    fontSize: 16,
  },
  checkResultButton: {
    width: 120,
    height: 35,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: Colors.universal.checkResultSortableListButtonColor,
  },
  checkResultButtonText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.universal.checkResultSortableListButtonTextColor,
  },
});
