import axios from "react-native-axios";

import { AsyncStorage } from "react-native";

import config from "./config";

const eventInstance = axios.create({ baseURL: config.BASE_URL });

const getEvents = async () => {
  try {
    const { data } = await eventInstance.get("/api/events");
    return data.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

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
    await AsyncStorage.setItem("EVENT_COLOR", event.color);
    await AsyncStorage.setItem("EVENT_TOKEN", token);

    return token;
  } catch (e) {
    throw new Error(e.message);
  }
};

export { getEvents, verifyEvent };
