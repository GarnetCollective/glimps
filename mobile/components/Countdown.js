import React from "react";
import { View, Text } from "react-native";

// Dependencies
import { Camera } from "expo";

// Styles
import styles from "../styles";

// Services
import { createCollage } from "../controllers";

// Components
import { Loader } from "./Loader.js";
import { Error } from "./Error.js";

export class Countdown extends React.Component {
  state = {
    storyCountdown: false,
    startCountdown: true,
    isCountingDown: false,
    picturesTaken: 0,
    pictures: [],
    countdown: "",
    flash: false,
    processing: false,
    loading: false,
    error: false
  };

  async componentDidMount() {
    this.countdown(3);
    await this.waitSeconds(1);
    this.setState({ isCountingDown: true });
  }

  waitSeconds = seconds => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  };

  countdown = async count => {
    let timeLeft = count;
    // Countdown timer before picture is taken
    for (let i = 0; i < count; i++) {
      await this.waitSeconds(1);
      this.setState({ countdown: timeLeft });
      timeLeft--;
    }
    await this.waitSeconds(1);
    timeLeft == 0 && this.beginStory();
  };

  beginStory = async () => {
    let { picturesTaken } = this.state;
    if (picturesTaken < 2) {
      try {
        this.setState({ storyCountdown: false });
        this.setState({
          startCountdown: false,
          countdown: 2,
          picturesTaken: picturesTaken + 1
        });
        await this.flash();
        await this.takePicture();
        await this.waitSeconds(1);
        this.setState({ storyCountdown: true });
        await this.countdown(1);
      } catch (e) {
        this.setState({ error: true });
      }
    } else {
      const { pictures } = this.state;
      try {
        this.setState({ storyCountdown: false });
        await this.flash();
        await this.takePicture();
        await this.waitSeconds(1);
        this.create(pictures);
      } catch (e) {
        this.setState({ error: true });
      }
    }
  };

  takePicture = async () => {
    let { pictures } = this.state;
    try {
      const data = await this.camera.takePictureAsync({ base64: true });
      pictures.push(data);
    } catch (e) {
      this.setState({ error: true });
    }
  };

  create = async pictures => {
    // Send the story to the api
    // Set loading screen to true
    // Once story was built by api
    // navigate to a diff component
    try {
      const { navigate } = this.props.navigation;
      this.setState({ loading: true });
      const adjusted = pictures.map(pic => ({
        ...pic,
        base64: `data:image/jpg;base64,${pic.base64}`
      }));
      const { collage } = await createCollage(adjusted);

      navigate("Preview", { story: collage });
    } catch (e) {
      this.setState({ error: true });
    }
  };

  flash() {
    this.setState({ flash: true });
    setTimeout(() => {
      this.setState({ flash: false });
    }, 200);
  }

  cameraOverlay() {
    const {
      isCountingDown,
      flash,
      startCountdown,
      storyCountdown,
      countdown,
      loading,
      pictures,
      error
    } = this.state;
    return (
      <Camera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.camera}
        type="front"
      >
        {/* Displays the flash  animation*/}
        {flash && <View style={styles.flash} />}

        {/* Will display Get ready or the countdown, while the overlay is true*/}

        {startCountdown && (
          <View style={styles.previewScreenOverlay}>
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
        {loading && <Loader images={{ story: pictures.map(pic => pic.uri) }} />}

        {/* Error */}
        {error && <Error />}
      </Camera>
    );
  }

  render() {
    return this.cameraOverlay();
  }
}
