import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styles from "../../styles";
export default function Button(props) {
  const width = { width: parseInt(props.width) || 140 };
  const height = { height: parseInt(props.height) || 45 };
  const backgroundColor = {
    backgroundColor: props.backgroundColor || "transparent"
  };
  const borderColor = { borderColor: props.borderColor || "transparent" };
  const borderWidth = {
    borderWidth: parseInt(props.borderWidth) || 0
  };
  const textSize = { fontSize: parseInt(props.textSize) || 15 };
  const textWeight = { fontWeight: props.textWeight || "600" };
  const textColor = { color: props.textColor || "#FFF" };

  const buttonStyle = StyleSheet.flatten([
    width,
    height,
    backgroundColor,
    borderColor,
    borderWidth,
    styles.button
  ]);

  const buttonTextStyle = StyleSheet.flatten([
    textSize,
    textWeight,
    textColor,
    styles.buttonText
  ]);
  return (
    <View style={buttonStyle}>
      <Text style={buttonTextStyle}>{props.text}</Text>
    </View>
  );
}
