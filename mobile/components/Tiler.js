import React from "react";
import { View, Text, Image, AsyncStorage } from "react-native";

import { Camera } from "expo";

import styles from "../styles";

import Processing from "./Processing";
import Preview from "./Preview";
import FadeInView from "./FadeInView";

import { createTile } from "../controllers/story";

export default class Tiler extends React.Component {
  state = {
    storyCountdown: false,
    startCountdown: true,
    isCountingDown: false,
    picturesTaken: 0,
    pictures: [],
    picturesUri: [],
    countdown: "",
    flash: false,
    preview: false
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
    navigate("CameraPreview");
  };

  share = async () => {
    const { navigate } = this.props.navigation;
    try {
      const { pictures } = this.state;
      const pics = pictures.map(pic => ({
        ...pic,
        base64: `data:image/jpg;base64,${pic.base64}`
      }));

      let eventId = await AsyncStorage.getItem("EVENT_ID");

      const response = await createTile(eventId, pics);
      console.log(response);
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
        {/* Display story */}
        {preview && (
          <Preview data={picturesUri} retake={this.retake} share={this.share} />
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

        {/* Display loader while creating story */}
        {loading && (
          <Processing images={{ story: pictures.map(pic => pic.uri) }} />
        )}
      </Camera>
    );
  }

  render() {
    return this.cameraOverlay();
  }
}
