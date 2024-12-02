import { Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { router } from "expo-router";

const HeaderLeftBackButton = () => {
  return (
    <Pressable onPress={() => router.back()}>
      <ThemedText>Zurück</ThemedText>
    </Pressable>
  );
};
export default HeaderLeftBackButton;
