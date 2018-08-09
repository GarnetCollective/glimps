import { StackNavigator } from "react-navigation";

import { Events } from "./components";

import { CameraPermissions } from "./components";
import { CameraPreview } from "./components";
import { CameraCountdown } from "./components";

import { StoryPreview } from "./components";

import { NoPermissions } from "./components";
import { Error } from "./components";

const App = StackNavigator(
  {
    CameraPermissions: { screen: CameraPermissions },
    Home: { screen: Events },
    CameraPreview: { screen: CameraPreview },
    CameraCountdown: { screen: CameraCountdown },
    StoryPreview: { screen: StoryPreview },
    Error: { screen: Error },
    NoPermissions: { screen: NoPermissions }
  },
  {
    initialRouteName: "CameraPreview",
    headerMode: "none",
    swipeEnabled: false,
    portraitOnlyMode: true
  }
);

export default App;
