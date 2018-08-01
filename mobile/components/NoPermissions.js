import React from "react";
import { View, Text } from "react-native";

export class NoPermissions extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "#000" }}>
          Camera permissions not granted - cannot open camera preview.
        </Text>
      </View>
    );
  }
}
