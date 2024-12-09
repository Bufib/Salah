import { Pressable, Platform } from "react-native";
import { ThemedText } from "./ThemedText";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";

const HeaderLeftBackButton = ({backText= "Zurück"}) => {
  return (
    <Pressable style={styles.container} onPress={() => router.back()}>
      {Platform.OS === "ios" ? (
        <Ionicons
          name="chevron-back-outline"
          size={28}
          color={styles.icon.color}
        />
      ) : (
        <Entypo name="chevron-thin-left" size={24} color={styles.icon.color} />
      )}
      <ThemedText style={styles.backButtonText}>{backText}</ThemedText>
    </Pressable>
  );
};
export default HeaderLeftBackButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -15,
  },
  backButtonText: {
    fontSize: 18,
    color: Platform.OS === "ios" ? "#007AFF" : "#000000",
  },
  icon: {
    color: Platform.OS === "ios" ? "#007AFF" : "#000000",
  },
});
