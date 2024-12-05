import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import shuffledTextArray from "./shuffleTextArray";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import { Colors } from "@/constants/Colors";
import ContinueButton from "./ContinueButton";
import { Href } from "expo-router";
import Spacer from "./Spacer";

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

    if (results.includes(false)) {
      setTimeout(() => setResults([]), 2000); // Hide icons after 2 seconds if there's an incorrect item
    } else {
      setRightResult(true);
    }
  };

  // Shuffle Data randomly every time this component is used via shuffledTextArray
  const [items, setItems] = useState(shuffledTextArray(data));
  const [results, setResults] = useState<boolean[]>([]);
  const [rightResult, setRightResult] = useState<boolean>(false);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<string>) => {
    return (
      <View style={styles.listItemsContainer}>
        <ThemedView
          style={[
            styles.listItem,
            { backgroundColor: isActive ? "#f0f0f0" : "#ffffff" },
          ]}
        >
          <ThemedText style={styles.itemText} onLongPress={drag}>
            {item}
          </ThemedText>
        </ThemedView>
        <View style={styles.listItemsIcons}>
          {results.length > 0 &&
            (results[items.indexOf(item)] ? (
              <Entypo name="check" size={31} color="green" />
            ) : (
              <Octicons name="x" size={35} color="red" />
            ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${index}`}
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
