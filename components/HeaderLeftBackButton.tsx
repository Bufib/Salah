import { Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const HeaderLeftBackButton = () => {
  return (
    <Pressable onPress={() => router.back()}>
      <ThemedText style={styles.backButtonText}>Zurück</ThemedText>
    </Pressable>
  );
};
export default HeaderLeftBackButton;

const styles = StyleSheet.create({
  backButtonText: {
    fontSize: 18
  }
});
