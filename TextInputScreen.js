import { Accelerometer } from "expo-sensors";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default TextInputScreen = () => {
  const [completeText, setCompleteText] = useState("");
  const [visibleText, setVisibleText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [flag, setFlag] = useState(true);
  const [undoButtonActive, setUndoButtonActive] = useState(false);
  const [redoButtonActive, setRedoButtonActive] = useState(false);
  const [sensorData, setSensorData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setSensorData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const onChangeText = (newText) => {
    setCompleteText(newText);
    setVisibleText(newText);
    setCurrentIndex(newText.length - 1);
  };

  // logic for undo redo
  const { x } = sensorData;
  if (x >= 0.5 && flag && currentIndex > -1) {
    setCurrentIndex(currentIndex - 1);
    setVisibleText(completeText.substring(0, currentIndex));
    setFlag(false);
    !undoButtonActive && setUndoButtonActive(true);
  }
  if (x <= -0.5 && flag && currentIndex < completeText.length - 1) {
    setCurrentIndex(currentIndex + 1);
    setVisibleText(completeText.substring(0, currentIndex + 2));
    setFlag(false);
    !redoButtonActive && setRedoButtonActive(true);
  }
  if (x <= 0.2 && x >= -0.2 && !flag) {
    setFlag(true);
    undoButtonActive && setUndoButtonActive(false);
    redoButtonActive && setRedoButtonActive(false);
  }

  return (
    <View style={styles.container}>
      <TextInputWrapper onChangeText={onChangeText} visibleText={visibleText} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, undoButtonActive && styles.buttonActive]}
        >
          <Text>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, redoButtonActive && styles.buttonActive]}
        >
          <Text>Redo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TextInputWrapper = ({ visibleText, onChangeText }) => {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={onChangeText}
      value={visibleText}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
  textInput: { borderWidth: 1, padding: 20 },
  text: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
  buttonActive: {
    borderColor: "#ccc",
    backgroundColor: "powderblue",
  },
});
