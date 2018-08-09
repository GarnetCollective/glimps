import React from "react";
import { View, Text, Image } from "react-native";

// Styles
import styles from "../styles";

export class Loader extends React.Component {
  render() {
    // const { story } = this.props.images;
    return (
      <View style={styles.previewScreenOverlay}>
        <Text style={styles.titleStory}>Glimps</Text>

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
