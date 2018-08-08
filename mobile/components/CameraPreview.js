import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Camera } from "expo";

import styles from "../styles";

export class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        <View style={styles.previewScreenOverlay}>
          <Text style={styles.titleStory}>Glimps</Text>

          <TouchableOpacity
            style={styles.circle}
            onPress={() => navigate("Countdown")}
          >
            <Text style={styles.circleLabel}>Start</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }
}
