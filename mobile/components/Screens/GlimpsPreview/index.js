import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import Shell from "../../Shared/Shell";

import styles from "../../../styles";

export default function GlimpsPreview(props) {
  return (
    <Shell headerTitle="Let's take a look!">
      <View style={styles.storyPreview}>
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

          <View style={styles.shareContainer}>
            <TouchableOpacity onPress={props.retake}>
              <View style={styles.shareButton}>
                <Text style={styles.shareButtonText}>Retake</Text>
                <Image
                  source={require("../../../assets/icons/refresh_white.png")}
                  style={styles.shareButtonIcon}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.share}>
              <View style={styles.shareButton}>
                <Text style={styles.shareButtonText}>Share</Text>
                <Image
                  source={require("../../../assets/icons/share_white.png")}
                  style={styles.shareButtonIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Shell>
  );
}
