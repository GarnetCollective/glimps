import React from "react";
import { View, StyleSheet, Image } from "react-native";

import styles from "../../styles";

export default function Card(props) {
  const width = { width: parseInt(props.width) };
  const height = { height: parseInt(props.height) };

  const cardStyle = StyleSheet.flatten([width, height, styles.card]);

  return (
    <View style={cardStyle}>
      {props.image && (
        <View style={styles.cardImageContainer}>
          <Image
            source={{
              uri: props.image
                ? props.image
                : "https://pasteboard.co/images/HyhnMiE.jpg/load",
              cache: "force-cache"
            }}
            style={styles.cardImage}
          />
        </View>
      )}

      <View style={styles.cardInfo}>{props.children}</View>
    </View>
  );
}
