import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { Camera } from "expo";

import styles from "../styles";

function Circle(props) {
  navigate = () => props.navigate("CameraCountdown");

  return (
    <TouchableOpacity style={styles.startCircle} onPress={navigate}>
      <Text style={styles.startCircleLabel}>Start</Text>
    </TouchableOpacity>
  );
}

export default function CameraPreview(props) {
  // const { event } = this.props.navigation.state.params;
  const event = {
    name: "UPE",
    logoUrl:
      "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_photos/000/358/089/datas/full_width.png",
    color: "rgba(16, 222, 110,0.3)"
  };

  const { navigate } = props.navigation;

  const eventColor = { backgroundColor: event.color };
  const colorOverlay = StyleSheet.flatten([
    eventColor,
    styles.cameraColorOverlay
  ]);

  return (
    <Camera ref={ref => (this.camera = ref)} style={styles.camera} type="front">
      <View style={colorOverlay}>
        <Image
          source={{ uri: event.logoUrl }}
          style={styles.cameraPreviewEventLogo}
        />
        <Circle navigate={navigate} />
      </View>
    </Camera>
  );
}
