import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "@/components/Spacer";
import InformationContainer from "@/components/InformationContainer";
import TitleSura from "@/components/TitleSura";
import RenderSura from "@/components/RenderSura";
import useUserInformationStore from "@/components/userInformationStore";
import { View } from "react-native";

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
  const { gender } = useUserInformationStore();

  return (
    <View style={styles.container}>
      <Spacer />
      <InformationContainer text={informationText} gender={gender} />
      <Spacer />
      <TitleSura text={titleText} />
      <Spacer />
      <RenderSura text={suraText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SuraScreen;
