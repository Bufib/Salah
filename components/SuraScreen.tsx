import React from "react";
import { ThemedView } from "./ThemedView";
import Spacer from "@/components/Spacer";
import InformationContainer from "@/components/InformationContainer";
import TitleSura from "@/components/TitleSura";
import RenderSura from "@/components/RenderSura";
import { StyleSheet } from "react-native";
import useGetUserInformation from "@/components/useGetUserInformation";

type SuraScreenProps = {
  informationText: string;
  titleText: string;
  suraText: string;
};

const SuraScreen = ({
  informationText,
  titleText,
  suraText,
}: SuraScreenProps) => {
  const { name, gender, userLoading } = useGetUserInformation();

  console.log(gender)

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <InformationContainer text={informationText} gender={gender} imagePosition="right"/>
      <Spacer />
      <TitleSura text={titleText} />
      <Spacer />
      <RenderSura text={suraText} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SuraScreen;
