import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  splashImage: {
    height: height,
    width: width
  },

  shell: {
    backgroundColor: "rgb(255, 255, 255)",
    height: height
  },

  sheet: {
    alignItems: "center",
    bottom: 140
  },

  sheetContent: {
    borderRadius: 10,
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

  card: {
    borderRadius: 10,
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

  cardImageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  cardImage: {
    height: 150,
    width: 250,
    resizeMode: "cover"
  },
  cardInfo: {
    marginLeft: 20,
    paddingVertical: 10
  },

  header: {
    height: height / 2.5,
    backgroundColor: "rgba(74, 66, 238, 0.7)"
  },

  headerCamera: {
    height: height / 2.5
  },

  headerTitle: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 45,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Avenir Next"
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

  button: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  buttonText: {
    fontFamily: "Avenir Next"
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

  eventHomeEventLogo: {
    height: height / 3,
    width: width / 3,
    resizeMode: "contain",
    marginBottom: 30
  },

  logout: {
    bottom: 15,
    left: -40,
    position: "absolute"
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
    bottom: 130
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

  shareContainer: {
    marginTop: 30,
    width: 530,
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  shareButton: {
    backgroundColor: "rgba(74, 66, 238, 1)",
    borderRadius: 50,
    width: width / 5,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  shareButtonText: {
    color: "rgb(255,255,255)",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Avenir Next",
    marginHorizontal: 15
  },
  shareButtonIcon: {
    height: 25,
    width: 25,
    resizeMode: "contain"
  },
  /* --------------------------------- */

  eventsInfo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  eventsListSelect: {
    fontWeight: "bold",
    fontFamily: "Avenir Next",
    fontSize: 25
  },
  eventsListAvailable: {
    fontFamily: "Avenir Next",
    fontSize: 20,
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

  eventName: {
    fontFamily: "Avenir Next",
    fontSize: 15,
    fontWeight: "bold"
  },
  eventDate: {
    fontFamily: "Avenir Next",
    fontSize: 13,
    fontWeight: "700",
    color: "#404040"
  },

  /* --------------------------------- */

  // previewLogo: {
  //   paddingBottom: 20
  // },

  // processingScreenOverlay: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "rgba(74, 66, 238, 0.7)"
  // },

  processingTitle: {
    fontWeight: "600",
    fontFamily: "Avenir Next",
    fontSize: 90,
    color: "#fff",
    paddingBottom: 50
  },

  processingGif: {
    height: 200,
    width: 200
  },

  processingText: {
    fontWeight: "600",
    fontFamily: "Avenir Next",
    fontSize: 50,
    color: "#fff",
    paddingTop: 10
  },

  processingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  processingCard: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 170,
    width: width / 2.35,
    height: height / 1.4,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  /* --------------------------------- */
  retrievalNavContainer: {
    width: width,
    alignItems: "center",
    position: "absolute"
  },
  retrievalNav: {
    top: 100,
    flex: 1,
    width: width / 2.35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  retrievalNavText: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Avenir Next",
    fontWeight: "700"
  },
  scanItText: {
    fontWeight: "700",
    fontFamily: "Avenir Next",
    fontSize: 30,
    marginBottom: 15
  },
  orText: {
    fontWeight: "600",
    fontFamily: "Avenir Next",
    fontSize: 25,
    marginBottom: 15,
    marginTop: 15
  },
  processingInfoContainer: {
    marginTop: 30,
    alignItems: "center"
  },
  findIt: {
    fontWeight: "600",
    color: "#555555",
    fontFamily: "Avenir Next",
    fontSize: 18
  },
  link: {
    fontWeight: "700",
    color: "#323332",
    fontFamily: "Avenir Next",
    fontSize: 18,
    marginTop: 10
  }
});
