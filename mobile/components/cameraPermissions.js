import React from "react";
import { View } from "react-native";

import { Permissions } from "expo";

export default class CameraPermissions extends React.Component {
  state = { cameraPermission: false };

  componentDidMount = async () => {
    const { navigate } = this.props.navigation;

    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const isGranted = status === "granted";
    if (!isGranted) {
      navigate("NoPermissions");
    } else {
      navigate("Home");
    }
  };

  render() {
    return <View />;
  }
}
