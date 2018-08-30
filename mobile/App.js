import { StackNavigator } from "react-navigation";

import Splash from "./components/Splash";
import { Events } from "./components/Events";

import CameraPermissions from "./components/CameraPermissions";
import CameraPreview from "./components/CameraPreview";

import Tiler from "./components/Tiler";
import Giffer from "./components/Giffer";

import StoryPreview from "./components/StoryPreview";

import NoPermissions from "./components/NoPermissions";
import Error from "./components/Error";

const App = StackNavigator(
  {
    Home: { screen: Splash },
    Events: { screen: Events },
    CameraPermissions: { screen: CameraPermissions },
    CameraPreview: { screen: CameraPreview },
    Tiler: { screen: Tiler },
    Giffer: { screen: Giffer },
    StoryPreview: { screen: StoryPreview },
    Error: { screen: Error },
    NoPermissions: { screen: NoPermissions }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    swipeEnabled: false,
    portraitOnlyMode: true
  }
);

export default App;
