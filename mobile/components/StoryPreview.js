import React from "react";
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

// Dependencies
import { Camera } from "expo";

// Styles
import styles from "../styles";

export class StoryPreview extends React.Component {
  displayStory = data =>
    data.map((uri, i) => (
      <Image key={i} source={{ uri: uri }} style={styles.storyPreviewImage} />
    ));

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
      <Camera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.camera}
        type="front"
      >
        <View style={styles.previewScreenOverlay}>
          <View style={styles.storyPreviewRefreshContainer}>
            <TouchableOpacity onPress={() => navigate("CameraPreview")}>
              <Text style={styles.storyPreviewRefreshText}>Retake</Text>
              <Image
                source={require("../assets/icons/refresh_white.png")}
                style={styles.storyPreviewRefresh}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.storyPreviewShareContainer}>
            <TouchableOpacity>
              <Text style={styles.storyPreviewShareText}>Share</Text>
              <Image
                source={require("../assets/icons/share_white.png")}
                style={styles.storyPreviewShare}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.storyPreviewImageContainer}>
            {dataUri.length > 0 && this.displayStory(dataUri)}
          </View>
        </View>
      </Camera>
    );
  }
}
