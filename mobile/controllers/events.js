import axios from "react-native-axios";

import config from "./config";

const event = axios.create({ baseURL: config.BASE_URL });

const getEvents = async () => {
  try {
    const { data } = await event.get("/api/events");
    return data.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const verifyEvent = async (event, key) => {
  try {
    // const verify = await event.get(`/events/${event.id}`, { secretKey: key });
    return;
  } catch (e) {
    throw new Error(e.message);
  }
};

export { getEvents, verifyEvent };
