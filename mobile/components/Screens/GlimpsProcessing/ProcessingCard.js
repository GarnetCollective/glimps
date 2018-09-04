import React from "react";

import { View } from "react-native";

import styles from "../../../styles";

export default function ProcessingCard(props) {
  return (
    <View style={styles.processingContainer}>
      <View style={styles.processingCard}>{props.children}</View>
    </View>
  );
}
