import React from "react";
import { View, StyleSheet } from "react-native";
import styles from "../../styles";

export default function Sheet(props) {
  const width = { width: parseInt(props.width) };
  const height = { height: parseInt(props.height) };
  const backgroundColor = { backgroundColor: props.backgroundColor || "#FFF" };

  const sheetStyle = StyleSheet.flatten([
    width,
    height,
    backgroundColor,
    styles.sheetContent
  ]);

  return (
    <View style={styles.sheet}>
      <View style={sheetStyle}>{props.children}</View>
    </View>
  );
}
