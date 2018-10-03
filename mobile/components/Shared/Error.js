import React from "react";
import { View, Image } from "react-native";

import styles from "../../styles";

export default class Error extends React.Component {
  state = { timeLeft: 10 };
  componentDidMount = () => setInterval(this.countdown, 1000);

  countdown = () => {
    const { navigate } = this.props.navigation;
    const { timeLeft } = this.state;
    timeLeft == 1 && navigate("Home");
    this.setState({ timeLeft: timeLeft - 1 });
  };

  render() {
    return (
      <View>
        <Image
          source={require("../../assets/images/glimps_error.png")}
          style={styles.splashImage}
        />
      </View>
    );
  }
}
