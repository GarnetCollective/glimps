import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

// Dependencies
import { Camera } from "expo";

// Styles
import styles from "../styles";

export default class StoryPreview extends React.Component {
  displayStory = data =>
    data.map((uri, i) => (
      <Image key={i} source={{ uri: uri }} style={styles.storyPreviewImage} />
    ));

  header = () => (
    <Camera
      ref={ref => (this.camera = ref)}
      style={styles.headerCamera}
      type="front"
    >
      <View style={styles.header}>
        <Text style={styles.eventsHeaderTitle}>Let's take a look!</Text>
      </View>
    </Camera>
  );

  render() {
    const { dataUri, data } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    // const dataUri = [
    //   "https://pasteboard.co/images/HyhnMiE.jpg/load",
    //   "https://pasteboard.co/images/HyhnMiE.jpg/load",
    //   "https://pasteboard.co/images/HyhnMiE.jpg/load",
    //   "https://pasteboard.co/images/HyhnMiE.jpg/load"
    // ];
    return (
      <View style={styles.storyPreview}>
        {this.header()}
        <View style={styles.storyPreviewContainer}>
          <View style={styles.storyPreviewImageContainer}>
            {this.displayStory(dataUri)}
          </View>
          <View style={styles.storyPreviewOptionsContainer}>
            <TouchableOpacity onPress={() => navigate("CameraPreview")}>
              <View style={styles.storyPreviewOptionButton}>
                <Text style={styles.storyPreviewOptionText}>Retake</Text>
                <Image
                  source={require("../assets/icons/refresh_white.png")}
                  style={styles.storyPreviewIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
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
}
