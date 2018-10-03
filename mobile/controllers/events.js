import axios from "react-native-axios";
import { AsyncStorage } from "react-native";

import config from "./config";

const eventInstance = axios.create({ baseURL: config.BASE_URL });

const getEvents = async () => {
  try {
    const {
      data: { data: events }
    } = await eventInstance.get("/api/events");
    return events;
  } catch (e) {
    throw new Error(e.message);
  }
};

/**
 * @param { string } event
 * @param { string } key
 */
const verifyEvent = async (event, key) => {
  try {
    let {
      data: { data: token }
    } = await eventInstance.post(`/auth/tokens`, {
      eventId: event.id,
      secret: key
    });

    await AsyncStorage.setItem("EVENT_ID", event.id);
    await AsyncStorage.setItem("EVENT_LOGO", event.logoUrl);
    await AsyncStorage.setItem("EVENT_MAIN_IMAGE", event.mainImageUrl);
    await AsyncStorage.setItem("EVENT_SLUG", event.slug);
    await AsyncStorage.setItem("EVENT_COLOR", event.mainColor);
    await AsyncStorage.setItem("EVENT_TOKEN", token);

    return token;
  } catch (e) {
    throw new Error(e.message);
  }
};

export { getEvents, verifyEvent };
