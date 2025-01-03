import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Spacer = () => {
  return <View style={styles.spacer}></View>;
};

export default Spacer;

const styles = StyleSheet.create({
  spacer: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "transparent"
  },
});
