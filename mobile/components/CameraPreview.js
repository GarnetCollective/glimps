import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Camera } from "expo";

import styles from "../styles";

export class CameraPreview extends React.Component {
  render() {
    // const { event } = this.props.navigation.state.params;
    const event = { name: "spoke" };
    const { navigate } = this.props.navigation;
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        <View style={styles.previewScreenOverlay}>
          <Text style={styles.titleStory}>{event.name}</Text>

          <TouchableOpacity
            style={styles.circle}
            onPress={() => navigate("CameraCountdown")}
          >
            <Text style={styles.circleLabel}>Start</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }
}
