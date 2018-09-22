import React from "react";
import { View, Text, Image, AsyncStorage } from "react-native";

import { Camera } from "expo";

import styles from "../../../styles";

import GlimpsPreview from "../GlimpsPreview";
import FadeInView from "../../Shared/FadeInView";

import GlimpsProcessing from "../GlimpsProcessing";

import { createTile } from "../../../controllers/story";

export default class GlimpsCountdown extends React.Component {
  state = {
    storyCountdown: false,
    startCountdown: true,
    isCountingDown: false,
    picturesTaken: 0,
    pictures: [],
    picturesUri: [],
    countdown: "",
    flash: false,
    preview: false,
    processing: false
  };

  async componentDidMount() {
    this.countdown(3);
    await this.waitSeconds(1);
    this.setState({ isCountingDown: true });
  }

  waitSeconds = seconds =>
    new Promise(resolve => setTimeout(resolve, seconds * 1000));

  countdown = async count => {
    let timeLeft = count;
    for (let i = 0; i < count; i++) {
      await this.waitSeconds(1);
      this.setState({ countdown: timeLeft });
      timeLeft--;
    }
    await this.waitSeconds(1);
    timeLeft == 0 && this.beginStory();
  };

  beginStory = async () => await this.takeNumPictures(2);

  takeNumPictures = async num => {
    const { navigate } = this.props.navigation;
    let { picturesTaken } = this.state;
    let waitSeconds = 3;
    if (picturesTaken < num) {
      try {
        this.setState({
          storyCountdown: false,
          startCountdown: false,
          countdown: waitSeconds,
          picturesTaken: picturesTaken + 1
        });
        await this.flash();
        await this.takePicture();
        this.setState({ storyCountdown: true });
        await this.countdown(2);
      } catch (e) {
        throw new Error(e);
        navigate("Error");
      }
    } else {
      try {
        this.setState({ storyCountdown: false });
        await this.flash();
        await this.takePicture();
        this.waitSeconds(1);
        this.display();
      } catch (e) {
        navigate("Error");
      }
    }
  };

  takePicture = async () => {
    const { navigate } = this.props.navigation;
    let { pictures, picturesUri } = this.state;
    try {
      const data = await this.camera.takePictureAsync({ base64: true });
      picturesUri.push(data.uri);
      pictures.push(data);
      await this.waitSeconds(1);
    } catch (e) {
      navigate("Error");
    }
  };

  flash() {
    this.setState({ flash: true });
    setTimeout(() => this.setState({ flash: false }), 200);
  }

  display = async () => {
    try {
      const { picturesUri } = this.state;
      let eventLogo = await AsyncStorage.getItem("EVENT_MAIN_IMAGE");
      picturesUri.push(eventLogo);

      this.setState({ preview: true });
    } catch (e) {
      navigate("Error");
    }
  };

  displayCurrentStory = pictures =>
    pictures.map(({ uri }) => (
      <FadeInView key={uri}>
        <Image source={{ uri: uri }} style={styles.currentStoryImage} />
      </FadeInView>
    ));

  retake = () => {
    const { navigate } = this.props.navigation;
    navigate("Home");
  };

  share = async () => {
    const { pictures } = this.state;
    const data = pictures;

    const { navigate } = this.props.navigation;
    try {
      const pics = data.map(pic => ({
        ...pic,
        base64: `data:image/jpg;base64,${pic.base64}`
      }));

      this.setState({ preview: false, processing: true, pictures: [] });

      let eventId = await AsyncStorage.getItem("EVENT_ID");

      const { glimpsUri, glimpsId } = await createTile(eventId, pics);

      navigate("GlimpsRetrieval", { glimpsUri, glimpsId });
    } catch (e) {
      navigate("Error");
    }
  };

  cameraOverlay() {
    const {
      flash,
      isCountingDown,
      startCountdown,
      storyCountdown,
      countdown,
      preview,
      processing,
      pictures,
      picturesUri
    } = this.state;

    return (
      <Camera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.camera}
        type="front"
      >
        {processing && <GlimpsProcessing />}

        {/* Display story */}
        {preview && (
          <GlimpsPreview
            data={picturesUri}
            retake={this.retake}
            share={this.share}
          />
        )}

        {/* Displays the flash  animation*/}
        {flash && <View style={styles.flash} />}

        {/* Display current story */}
        {pictures.length > 0 && (
          <View style={styles.currentStoryImageContainer}>
            {this.displayCurrentStory(pictures)}
          </View>
        )}

        {/* Will display Get ready or the countdown, while the overlay is true*/}

        {startCountdown && (
          <View style={styles.cameraColorOverlay}>
            {isCountingDown ? (
              <Text style={styles.countdown}>{countdown}</Text>
            ) : (
              <Text style={styles.getReady}>Get Ready..</Text>
            )}
          </View>
        )}

        {/* Once story has begun this countdown will display with no overlay */}

        {storyCountdown && (
          <View style={styles.storyScreenOverlayCountdown}>
            <Text style={styles.countdown}>{countdown}</Text>
          </View>
        )}
      </Camera>
    );
  }

  render() {
    return this.cameraOverlay();
  }
}
