import React from "react";
import { AsyncStorage, View, Image } from "react-native";

import styles from "../styles";

export default class Splash extends React.Component {
  componentDidMount = async () => {
    const { navigate } = this.props.navigation;
    const token = await AsyncStorage.getItem("EVENT_TOKEN");
    console.log(token);
    token ? navigate("CameraPreview") : navigate("Events");
  };

  render() {
    const event = {
      name: "UPE",
      logoUrl:
        "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_photos/000/358/089/datas/full_width.png",
      color: "rgba(16, 222, 110,0.3)"
    };

    return (
      <View>
        <Image
          source={{ uri: event.logoUrl }}
          style={styles.cameraPreviewEventLogo}
        />
      </View>
    );
  }
}
