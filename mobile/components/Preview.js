import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { Camera } from "expo";

import styles from "../styles";

export default function Preview(props) {
  return (
    <View style={styles.storyPreview}>
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.headerCamera}
        type="front"
      >
        <View style={styles.header}>
          <Text style={styles.eventsHeaderTitle}>Let's take a look!</Text>
        </View>
      </Camera>
      <View style={styles.storyPreviewContainer}>
        <View style={styles.storyPreviewImageContainer}>
          {props.data.map((uri, i) => (
            <Image
              key={i}
              source={{ uri: uri }}
              style={styles.storyPreviewImage}
            />
          ))}
        </View>
        <View style={styles.storyPreviewOptionsContainer}>
          <TouchableOpacity onPress={props.retake}>
            <View style={styles.storyPreviewOptionButton}>
              <Text style={styles.storyPreviewOptionText}>Retake</Text>
              <Image
                source={require("../assets/icons/refresh_white.png")}
                style={styles.storyPreviewIcon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={props.share}>
            <View style={styles.storyPreviewOptionButton}>
              <Text style={styles.storyPreviewOptionText}>Share</Text>
              <Image
                source={require("../assets/icons/share_white.png")}
                style={styles.storyPreviewIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
