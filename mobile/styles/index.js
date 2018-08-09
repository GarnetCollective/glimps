import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  // Preview Camera
  camera: {
    width: width,
    height: height,
    flex: 1
  },
  previewScreenOverlay: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(171, 37, 35, 0.7)",
    backgroundColor: "rgba(159, 101, 245,0.4)",
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
    fontWeight: "700"
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
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgb(255, 255, 255)",
    width: width,
    height: height,
    zIndex: 5
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
  currentStoryImageContainer: {
    top: height / 1.38,
    // bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  currentStoryImage: {
    transform: [{ rotate: "-90deg" }],
    // flex: 1,
    marginHorizontal: 5,
    height: 200,
    width: 200
  },

  // Story preview
  storyPreviewImageContainer: {
    width: width / 1.6,
    height: height / 1.4,
    backgroundColor: "rgba(255, 255, 255,1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    paddingVertical: 10
  },

  storyPreviewImage: {
    marginVertical: 5,
    marginHorizontal: 5,
    width: 300,
    height: 255
  },

  storyPreviewShareContainer: {
    position: "absolute",
    top: height / 2.7,
    width: width,
    alignItems: "flex-end"
  },
  storyPreviewShareText: {
    marginRight: 50,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Avenir Next"
  },
  storyPreviewShare: {
    zIndex: 20,
    marginRight: 70,
    height: 70,
    width: 70
  },

  storyPreviewRefreshContainer: {
    position: "absolute",
    top: height / 2.7,
    width: width,
    alignItems: "flex-start",
    zIndex: 10
  },
  storyPreviewRefreshText: {
    marginLeft: 30,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Avenir Next"
  },
  storyPreviewRefresh: {
    zIndex: 20,
    marginLeft: 50,
    height: 70,
    width: 70
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
    // width: width,
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
    alignItems: "center",
    bottom: 100
  },
  eventsListContainer: {
    width: width / 1.15,
    height: height / 1.25,
    backgroundColor: "white",
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "#ccc",
    paddingHorizontal: 40,
    paddingVertical: 35,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  eventsInfo: {
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
    paddingTop: 15,
    paddingBottom: 50,
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  eventCard: {
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "#ccc",
    width: 250,
    marginVertical: 10,
    marginHorizontal: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },

  eventCardImageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  eventImage: {
    height: 150,
    width: 250,
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
  }
});
