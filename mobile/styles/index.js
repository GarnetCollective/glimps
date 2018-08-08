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

  // Events
  events: {
    backgroundColor: "rgb(255, 255, 255)"
  },
  eventsHeaderCamera: {
    height: height / 2.5
  },

  eventsHeader: {
    height: height / 2.5,
    width: width,
    backgroundColor: "rgba(74, 66, 238, 0.7)"
  },

  eventsHeaderTitle: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Avenir Next"
  },

  eventsContainer: {
    // width: width,
    // height: height / 2,
    alignItems: "center",
    bottom: 100
  },
  eventsListContainer: {
    width: width / 1.22,
    height: height / 1.25,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  eventsInfo: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  eventsListSelect: {
    fontWeight: "bold",
    fontFamily: "Avenir Next",
    fontSize: 30
  },
  eventsListAvailable: {
    fontFamily: "Avenir Next",
    fontSize: 25,
    fontWeight: "600",
    color: "#404040"
  },

  eventList: {
    flexDirection: "row",
    paddingVertical: 30,
    justifyContent: "space-between",
    flexWrap: "wrap"
  },

  eventCard: {
    overflow: "hidden",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 250,
    // marginHorizontal: 10,
    marginVertical: 10
  },

  eventImage: {
    height: 150,
    resizeMode: "cover"
  },
  eventCardInfo: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  eventName: {
    fontFamily: "Avenir Next",
    fontSize: 20,
    fontWeight: "bold"
  },
  eventDate: {
    fontFamily: "Avenir Next",
    fontSize: 15,
    fontWeight: "700",
    color: "#404040"
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
