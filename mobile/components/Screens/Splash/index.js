import React from "react";
import { AsyncStorage, View, Image } from "react-native";

import styles from "../../../styles";

export default class Splash extends React.Component {
  componentDidMount = async () => {
    const { navigate } = this.props.navigation;
    const token = await AsyncStorage.getItem("EVENT_TOKEN");
    token ? navigate("EventHome") : navigate("Events");
  };

  render() {
    return (
      <View>
        <Image
          source={require("../../../assets/images/glimps_placeholder.jpg")}
          style={styles.splashImage}
        />
      </View>
    );
  }
}
