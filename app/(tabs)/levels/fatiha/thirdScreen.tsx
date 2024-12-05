import React from "react";
import { Pressable, StyleSheet } from "react-native";
import AudioPlayer from "@/components/AudioPlayer";
import useUserInformationStore from "@/components/userInformationStore";
import SortableList from "@/components/SortableList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { fatihaTextDragAndDrop } from "@/components/suren";

export default function Fatiha() {
  const { gender } = useUserInformationStore();

  return (
    <GestureHandlerRootView style={styles.container}>
      <SortableList
        data={fatihaTextDragAndDrop}
        rightResultLink={"/(tabs)/levels/"}
        rightResultLinkText="Fertig"
        rightResultActivateNextLevelButton={true}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
