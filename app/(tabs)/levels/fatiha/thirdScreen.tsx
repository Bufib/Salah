import React from "react";
import { Pressable, StyleSheet } from "react-native";
import AudioPlayer from "@/components/AudioPlayer";
import SortableList from "@/components/SortableList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { fatihaTextDragAndDrop } from "@/components/suren";
import InformationContainer from "@/components/InformationContainer";
import Spacer from "@/components/Spacer";
import useGetUserInformation from "@/components/useGetUserInformation";
import ImageWithSpeechBubble from "@/components/ImageWithSpeechBubble";
import { coustomTheme } from "@/components/coustomTheme";

export default function Fatiha() {
  // const { gender } = useUserInformationStore();
  const { name, gender, userLoading } = useGetUserInformation();
  const themeStyles = coustomTheme()

  return (
    <GestureHandlerRootView style={[styles.container, themeStyles.background]}>
      <Spacer />
      <InformationContainer
        text="Sortiere die Abschnitte nach der richtigen Reihenfolge"
        bold={true}
      />
      <Spacer />
      <SortableList
        data={fatihaTextDragAndDrop}
        rightResultLink={"/(tabs)/levels"}
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
