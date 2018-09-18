import axios from "react-native-axios";
import { AsyncStorage } from "react-native";

import config from "./config";

const story = axios.create({ baseURL: config.BASE_URL });

story.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("EVENT_TOKEN");

    if (token) config.headers = { Authorization: "bearer " + token };

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

const createTile = async (eventId, pictures) => {
  const url = `/api/events/${eventId}/glimpses`;
  try {
    const { data } = await story.post(url, { data: pictures });

    if (data.success) {
      return { glimpsUri: data.data.thumbUrl, glimpsId: data.data.id };
    } else {
      throw new Error("Something went wrong.");
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export { createTile };
