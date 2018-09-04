import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { AsyncStorage } from "react-native";

import Logo from "../../Shared/Logo";
import { Camera } from "expo";

import styles from "../../../styles";

export default class EventHome extends React.Component {
  state = {
    logo:
      "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_photos/000/358/089/datas/full_width.png",
    backgroundColor: { backgroundColor: "rgba(16, 222, 110,1)" }
  };

  componentDidMount = async () => {
    const { navigate } = this.props.navigation;

    try {
      const logo = await AsyncStorage.getItem("EVENT_LOGO");
      const eventColor = await AsyncStorage.getItem("EVENT_COLOR");
      const backgroundColor = {
        backgroundColor: this.hex2RGBA(eventColor, 30)
      };

      this.setState({ logo, backgroundColor });
    } catch (e) {
      navigate("Error");
    }
  };

  hex2RGBA(hex, opacity) {
    hex = hex.replace("#", "");
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    result = "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
    return result;
  }

  clearLocalStorage = async () => {
    const { navigate } = this.props.navigation;
    await AsyncStorage.removeItem("EVENT_TOKEN");
    navigate("Events");
  };

  render() {
    const { logo, backgroundColor } = this.state;
    const { navigate } = this.props.navigation;

    const colorOverlay = StyleSheet.flatten([
      backgroundColor,
      styles.cameraColorOverlay
    ]);

    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        <View style={colorOverlay}>
          <Image source={{ uri: logo }} style={styles.eventHomeEventLogo} />

          <TouchableOpacity
            style={styles.startCircle}
            onPress={() => navigate("GlimpsCountdown")}
          >
            <Text style={styles.startCircleLabel}>Start</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => this.clearLocalStorage()}
        >
          <View>
            <Logo height="35" />
          </View>
        </TouchableOpacity>
      </Camera>
    );
  }
}
