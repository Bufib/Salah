import React from "react";
import { StyleSheet } from "react-native";
import AudioPlayer from "@/components/AudioPlayer";
import useUserInformationStore from "@/components/userInformationStore";
import { fatihaTextAudio } from "@/components/suren";
import { ScrollView } from "react-native";
import TitleSura from "@/components/TitleSura";
import Spacer from "@/components/Spacer";

export default function Fatiha() {
  const { gender } = useUserInformationStore();
  return (
    <ScrollView style={styles.container}>
      <Spacer />
      <TitleSura text="Lass uns nun die Sura anhören!"/>
      <AudioPlayer
        audioSource={
          gender === "boy"
            ? require("@/assets/audio/suraFatihaMale.mp3")
            : require("@/assets/audio/suraFatihaFemale.mp3")
        }
        textData={fatihaTextAudio}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
