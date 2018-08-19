import React from "react";
import { View, Text, Image, Animated } from "react-native";

// Dependencies
import { Camera } from "expo";

// Styles
import styles from "../styles";

// Services
import { createGif } from "../controllers/story";

// Components
import StoryProcessing from "./StoryProcessing";

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 1000 // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class Giffer extends React.Component {
  state = {
    storyCountdown: false,
    startCountdown: true,
    isCountingDown: false,
    picturesTaken: 0,
    pictures: [],
    picturesUri: [],
    countdown: "",
    flash: false,
    processing: false,
    loading: false
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
        // this.setState({
        //   storyCountdown: false,
        //   startCountdown: false,
        //   countdown: waitSeconds,
        //   picturesTaken: picturesTaken + 1
        // });
        // await this.flash();
        // await this.takePicture();
        // this.setState({ storyCountdown: true });
        // await this.countdown(2);
        await this.takePicture();
      } catch (e) {
        navigate("Error");
      }
    } else {
      const { pictures } = this.state;
      try {
        this.setState({ storyCountdown: false });
        await this.flash();
        await this.takePicture();
        this.waitSeconds(1);
        this.create(pictures);
      } catch (e) {
        navigate("Error");
      }
    }
  };

  takePicture = () => {
    return new Promise(resolve => {
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
      resolve()
    })
  };

  create = async pictures => {
    const { navigate } = this.props.navigation;
    try {
      const { picturesUri } = this.state;
      const adjusted = pictures.map(pic => ({
        ...pic,
        base64: `data:image/jpg;base64,${pic.base64}`
      }));

      this.setState({ loading: true, pictures: [] });
      const gifUrl = await createGif(adjusted);

      navigate("GifPreview", { data: gifUrl });
    } catch (e) {
      navigate("Error");
    }
  };

  flash() {
    this.setState({ flash: true });
    setTimeout(() => this.setState({ flash: false }), 200);
  }

  displayCurrentStory = pictures =>
    pictures.map(({ uri }) => (
      <FadeInView key={uri}>
        <Image source={{ uri: uri }} style={styles.currentStoryImage} />
      </FadeInView>
    ));

  cameraOverlay() {
    const {
      isCountingDown,
      flash,
      startCountdown,
      storyCountdown,
      countdown,
      loading,
      pictures
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
          <StoryProcessing images={{ story: pictures.map(pic => pic.uri) }} />
        )}
      </Camera>
    );
  }

  render() {
    return this.cameraOverlay();
  }
}
