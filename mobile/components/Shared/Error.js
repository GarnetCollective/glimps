import React from "react";
import { View, Image } from "react-native";

import styles from "../../styles";

export default function Error(props) {
  return (
    <View>
      <Image
        source={require("../../assets/images/glimps_placeholder.jpg")}
        style={styles.splashImage}
      />
    </View>
  );
}
