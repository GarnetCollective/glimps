import React from "react";
import { View, Text } from "react-native";

export default function NoPermissions(props) {
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
