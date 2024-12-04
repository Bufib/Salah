import { Pressable, Platform } from "react-native";
import { ThemedText } from "./ThemedText";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HeaderLeftBackButton = () => {
  return (
    <Pressable style={styles.container} onPress={() => router.back()}>
      {Platform.OS === "ios" ? (
        <Ionicons name="chevron-back-outline" size={28} color={styles.icon.color} />
      ) : (
        <MaterialIcons name="arrow-back" size={24} color={styles.icon.color} />
      )}
      <ThemedText style={styles.backButtonText}>Übersicht</ThemedText>
    </Pressable>
  );
};
export default HeaderLeftBackButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -15
  },
  backButtonText: {
    fontSize: 18,
    color: Platform.OS === "ios" ? "#007AFF" : "#000000",
  },
  icon: {
    color: Platform.OS === "ios" ? "#007AFF" : "#000000",
  },
});
