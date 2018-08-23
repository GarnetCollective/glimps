import { StackNavigator } from "react-navigation";

import { Events } from "./components";

import CameraPermissions from "./components/CameraPermissions";
import CameraPreview from "./components/CameraPreview";

import Tiler from "./components/Tiler";
import Giffer from "./components/Giffer";

import StoryPreview from "./components/StoryPreview";

import NoPermissions from "./components/NoPermissions";
import Error from "./components";

const App = StackNavigator(
  {
    Home: { screen: Events },
    CameraPermissions: { screen: CameraPermissions },
    CameraPreview: { screen: CameraPreview },
    Tiler: { screen: Tiler },
    Giffer: { screen: Giffer },
    StoryPreview: { screen: StoryPreview },
    Error: { screen: Error },
    NoPermissions: { screen: NoPermissions }
  },
  {
    initialRouteName: "Giffer",
    headerMode: "none",
    swipeEnabled: false,
    portraitOnlyMode: true
  }
);

export default App;
