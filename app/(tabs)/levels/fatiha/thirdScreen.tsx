import React from "react";
import { StyleSheet } from "react-native";
import AudioPlayer from "@/components/AudioPlayer";
import useUserInformationStore from "@/components/userInformationStore";
import { fatihaTextAudio } from "@/components/suren";
import { ScrollView } from "react-native";
import TitleSura from "@/components/TitleSura";
import Spacer from "@/components/Spacer";
import InformationContainer from "@/components/InformationContainer";
import ContinueButton from "@/components/ContinueButton";

export default function Fatiha() {
  const { gender } = useUserInformationStore();

  return (
    <ScrollView style={styles.container}>
      <Spacer />
      <TitleSura text="Lass uns nun die Sura anhören!" />
      <AudioPlayer
        audioSource={
          gender === "boy"
            ? require("@/assets/audio/suraFatihaMale.mp3")
            : require("@/assets/audio/suraFatihaFemale.mp3")
        }
        textData={fatihaTextAudio}
      />
      <Spacer />
      <Spacer />
      <InformationContainer
        bold={true}
        gender={gender}
        text="Höre dir die Sura solange an, bis du sie auswendig kannst! 
        Im nächsten Schritt gibt es dann nämlich einen kleinen Test"
      />
      <ContinueButton
        link={"/(tabs)/levels/fatiha/thirdScreen"}
        activateNextLevelButton={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});