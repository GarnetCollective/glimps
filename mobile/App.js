import { StackNavigator } from "react-navigation";

import Splash from "./components/Screens/Splash";
import Events from "./components/Screens/Events";
import EventHome from "./components/Screens/EventHome";

import GlimpsCountdown from "./components/Screens/GlimpsCountdown";
import GlimpsPreview from "./components/Screens/GlimpsPreview";
import GlimpsProcessing from "./components/Screens/GlimpsProcessing";
import GlimpsRetrieval from "./components/Screens/GlimpsRetrieval";

import PhonePad from "./components/Screens/GlimpsRetrieval/PhonePad";

import Error from "./components/Shared/Error";
import NoPermissions from "./components/Shared/NoPermissions";
import CameraPermissions from "./components/Shared/CameraPermissions";

const App = StackNavigator(
  {
    Home: { screen: Splash },
    Events: { screen: Events },
    EventHome: { screen: EventHome },
    GlimpsCountdown: { screen: GlimpsCountdown },
    GlimpsPreview: { screen: GlimpsPreview },
    GlimpsProcessing: { screen: GlimpsProcessing },
    GlimpsRetrieval: { screen: GlimpsRetrieval },
    CameraPermissions: { screen: CameraPermissions },
    PhonePad: { screen: PhonePad },
    Error: { screen: Error },
    NoPermissions: { screen: NoPermissions }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      swipeEnabled: false,
      gesturesEnabled: false
    }
  }
);

export default App;
