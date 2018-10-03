import React from "react";
import { View, Text } from "react-native";
import { Camera } from "expo";

import styles from "../../styles";

export default function Header(props) {
  return (
    <Camera
      ref={ref => (this.camera = ref)}
      style={styles.headerCamera}
      type="front"
    >
      <View style={styles.header}>
        {props.title && <Text style={styles.headerTitle}>{props.title}</Text>}
      </View>
    </Camera>
  );
}
