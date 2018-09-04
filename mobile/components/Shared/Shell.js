import React from "react";

import { View } from "react-native";

import Header from "./Header";

import styles from "../../styles";

export default function Shell(props) {
  return (
    <View style={styles.shell}>
      <Header title={props.headerTitle} />
      {props.children}
    </View>
  );
}
