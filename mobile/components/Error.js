import React from "react";
import { View, Image, Text } from "react-native";

// Dependencies
import { Camera } from "expo";

// Styles
import styles from "../styles";

export default function Error(props) {
  // const { message } = this.props.navigation.state.params;
  const image =
    "https://thumbs.gfycat.com/InferiorAnxiousAustralianfreshwatercrocodile-max-14mb.gif";
  return (
    <Camera
      ref={ref => {
        this.camera = ref;
      }}
      style={styles.camera}
      type="front"
    >
      <View style={styles.previewScreenOverlay}>
        {/* <Image source={{ uri: image }} style={styles.result} />; */}
        <Text style={styles.resultText}>Oops an error occured</Text>
      </View>
    </Camera>
  );
}
