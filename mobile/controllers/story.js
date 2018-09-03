import axios from "react-native-axios";
import { AsyncStorage } from "react-native";

import config from "./config";

const story = axios.create({ baseURL: config.BASE_URL });

// Add a request interceptor
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
      return { collage: data.data.thumbUrl };
    } else {
      throw new Error("Something went wrong.");
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

const createGif = async pictures => {
  try {
    const gif = await axios.post(`${url}/create`, {
      brandImage: "http://2016.mangohacks.com/img/logo.png",
      data: pictures,
      eventName: "whispered"
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

export { createTile, createGif };
