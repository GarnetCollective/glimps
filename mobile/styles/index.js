import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  splashImage: {
    height: height,
    width: width
  },
  /* --------------------------------- */
  header: {
    height: height / 2.5,
    backgroundColor: "rgba(74, 66, 238, 0.7)"
  },

  headerCamera: {
    height: height / 2.5
  },

  camera: {
    width: width,
    height: height,
    flex: 1
  },

  cameraColorOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  /* --------------------------------- */

  startCircle: {
    width: 250,
    height: 250,
    borderRadius: 250,
    borderWidth: 13,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  startCircleLabel: {
    color: "#fff",
    fontSize: 70,
    fontFamily: "Avenir Next",
    fontWeight: "bold"
  },

  cameraPreviewEventLogo: {
    height: height / 2.5,
    width: width / 2.5,
    resizeMode: "contain"
  },

  cameraPreviewLogOut: {
    flex: 1
  },

  /* --------------------------------- */

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
    alignItems: "center",
    justifyContent: "center"
  },

  currentStoryImageContainer: {
    top: height / 1.38,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  currentStoryImage: {
    // transform: [{ rotate: "90deg" }],
    marginHorizontal: 5,
    height: 200,
    width: 200
  },

  /* --------------------------------- */
  storyPreview: {
    backgroundColor: "rgba(255, 255, 255,1)"
  },

  storyPreviewContainer: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 100
  },
  storyPreviewImageContainer: {
    width: 530,
    height: 405,
    backgroundColor: "rgba(255, 255, 255,1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,

    elevation: 8
  },

  storyPreviewImage: {
    marginVertical: 5,
    marginHorizontal: 5,
    width: 250,
    height: 188
  },

  storyPreviewOptionsContainer: {
    marginTop: 20,
    width: 530,
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  storyPreviewOptionButton: {
    backgroundColor: "rgba(74, 66, 238, 1)",
    borderRadius: 50,
    width: width / 5,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  storyPreviewOptionText: {
    color: "rgb(255,255,255)",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Avenir Next",
    marginHorizontal: 15
  },
  storyPreviewIcon: {
    height: 25,
    width: 25,
    resizeMode: "contain"
  },
  /* --------------------------------- */

  events: {
    backgroundColor: "rgb(255, 255, 255)"
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

  /* --------------------------------- */

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
  }

  /* --------------------------------- */
});
