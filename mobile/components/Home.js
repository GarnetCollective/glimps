import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Dependencies
import { Camera, Permissions } from "expo";

// CSS
import styles from "../css/styles";

export class Home extends React.Component {
  state = { cameraPermission: false };

  componentDidMount = async () => {
    const { navigate } = this.props.navigation;

    // Get camera permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const isGranted = status === "granted";
    if (!isGranted) {
      navigate("NoPermissions");
    } else {
      this.setState({ cameraPermission: isGranted });
    }
  };

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
