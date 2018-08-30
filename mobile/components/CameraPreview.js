import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { AsyncStorage } from "react-native";

import Logo from "./Logo";
import { Camera } from "expo";

import styles from "../styles";

function Circle(props) {
  navigate = () => props.navigate("Tiler");

  return (
    <TouchableOpacity style={styles.startCircle} onPress={navigate}>
      <Text style={styles.startCircleLabel}>Start</Text>
    </TouchableOpacity>
  );
}

export default class CameraPreview extends React.Component {
  state = {
    logo:
      "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_photos/000/358/089/datas/full_width.png",
    eventColor: { backgroundColor: "rgba(16, 222, 110,0.3)" }
  };

  componentDidMount = async () => {
    const { navigate } = this.props.navigation;

    try {
      const logo = await AsyncStorage.getItem("EVENT_LOGO");
      // const eventColor = await AsyncStorage.getItem("EVENT_COLOR");
      let eventColor = { backgroundColor: "rgba(16, 222, 110,0.3)" };

      this.setState({ logo, eventColor });
    } catch (e) {
      navigate("Error");
    }
  };

  clearLocalStorage = async () => {
    await AsyncStorage.removeItem("EVENT_TOKEN");
    navigate("Events");
  };

  render() {
    const { logo, eventColor } = this.state;
    const { navigate } = this.props.navigation;

    const colorOverlay = StyleSheet.flatten([
      eventColor,
      styles.cameraColorOverlay
    ]);

    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        <View style={colorOverlay}>
          <TouchableOpacity onPress={() => this.clearLocalStorage()}>
            <Logo />
          </TouchableOpacity>

          <Image source={{ uri: logo }} style={styles.cameraPreviewEventLogo} />
          <Circle navigate={navigate} />
        </View>
      </Camera>
    );
  }
}
