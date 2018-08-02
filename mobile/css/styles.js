import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  // Preview Camera
  camera: {
    flex: 1
  },
  previewScreenOverlay: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(171, 37, 35, 0.7)",
    width: width,
    height: height
  },
  circle: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    borderWidth: 12,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  circleLabel: {
    color: "#fff",
    fontSize: 70,
    fontFamily: "Avenir Next",
    fontWeight: "500"
  },
  // Countdown Camera
  countdown: {
    color: "rgb(255,255,255)",
    fontSize: 300,
    fontFamily: "Avenir Next",
    fontWeight: "700"
  },
  getReady: {
    color: "rgb(255,255,255)",
    fontSize: 60,
    fontFamily: "Avenir Next",
    fontWeight: "700"
  },
  flash: {
    flex: 1,
    left: 0,
    top: 0,
    backgroundColor: "rgb(255, 255, 255)",
    width: width,
    height: height
  },
  storyScreenOverlayCountdown: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(171, 37, 35, 0.7)",
    width: width,
    height: height
  },

  // Event
  eventList: {
    top: 50
  },

  eventContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    height: 100,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10
    // top: 50
  },
  eventDateContainer: {
    width: 100,
    height: 100,
    justifyContent: "center"
  },
  eventNameContainer: {
    width: 300,
    height: 100,
    justifyContent: "center"
  },
  eventImage: {
    width: 100,
    height: 100
  },
  eventDate: {
    fontSize: 30,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
    fontWeight: "bold"
  },
  eventName: {
    fontSize: 30,
    color: "#000",
    textAlign: "center"
  },

  // Loader
  titleStory: {
    fontWeight: "600",
    fontFamily: "Avenir Next",
    fontSize: 90,
    color: "#fff",
    paddingBottom: 50
  },
  titleBoard: {
    fontWeight: "400",
    fontFamily: "Avenir Next",
    color: "#fff"
  },
  processingImage: {
    height: 150,
    width: 150
  },
  processingText: {
    fontWeight: "600",
    fontFamily: "Avenir Next",
    fontSize: 50,
    color: "#fff",
    paddingTop: 50
  },

  // Result
  result: {
    height: 468,
    width: 624,
    alignSelf: "center"
  },
  resultText: {
    fontWeight: "600",
    fontFamily: "Avenir Next",
    fontSize: 50,
    color: "#fff",
    paddingTop: 50
  },
  startOverText: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "400"
  }
});
