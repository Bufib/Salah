import React from "react";
import { StyleSheet } from "react-native";
import AudioPlayer from "@/components/AudioPlayer";
import { fatihaTextAudio } from "@/components/suren";
import { ScrollView, View } from "react-native";
import TitleSura from "@/components/TitleSura";
import Spacer from "@/components/Spacer";
import InformationContainer from "@/components/InformationContainer";
import ContinueButton from "@/components/ContinueButton";
import useGetUserInformation from "@/components/useGetUserInformation";
import { coustomTheme } from "@/components/coustomTheme";


export default function Fatiha() {
  // const { gender } = useUserInformationStore();
  const { name, gender, userLoading } = useGetUserInformation();
  const themestyles = coustomTheme()
  return (
    <ScrollView style={[styles.container, themestyles.background]}>
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
        imagePosition="right"
      />
      <ContinueButton
        link={"/(tabs)/levels/fatiha/thirdScreen"}
        activateNextLevelButton={false}
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
