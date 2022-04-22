import React from "react";
import { StyleSheet, View } from "react-native";
import TextInputScreen from "./TextInputScreen";

export default App = () => {
  return (
    <View style={styles.container}>
      <TextInputScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightskyblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
