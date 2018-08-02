import React from "react";
import { View, Image, Text } from "react-native";

// Dependencies
import { Camera } from "expo";

// Styles
import styles from "../css/styles";

export class Preview extends React.Component {
  render() {
    const { story, message } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    return (
      <Camera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.camera}
        type="front"
      >
        <View style={styles.previewScreenOverlay}>
          <Image source={{ uri: story }} style={styles.result} />
          <Text style={styles.resultText}>{message}</Text>
          <Text style={styles.startOverText} onPress={() => navigate("Home")}>
            Start Over
          </Text>
        </View>
      </Camera>
    );
  }
}
