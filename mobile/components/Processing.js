import React from "react";
import { View, Text, Image } from "react-native";

// Styles
import styles from "../styles";

export class Processing extends React.Component {
  render() {
    // Image from memory
    // can be used for placholder while waiting
    // to recieve collage from api
    const { story } = this.props.images;
    return (
      <View style={styles.previewScreenOverlay}>
        {/* OG Loading screen */}
        <Text style={styles.titleStory}>
          Story
          <Text style={styles.titleBoard}>Board</Text>
        </Text>

        <View style={styles.circle}>
          <Image
            style={styles.processingImage}
            source={{ uri: "https://i.imgur.com/eF2tRrm.gif" }}
          />
        </View>

        <Text style={styles.processingText}>Putting it all together</Text>
      </View>
    );
  }
}
