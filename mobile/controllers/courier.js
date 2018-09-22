import axios from "react-native-axios";
import { AsyncStorage } from "react-native";

import config from "./config";

const courier = axios.create({ baseURL: config.BASE_URL });

courier.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("EVENT_TOKEN");

    if (token) config.headers = { Authorization: "Bearer " + token };

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

const sendText = (phoneNumber, glimpsId) => {
  const url = `/api/text-messages`;
  courier.post(url, { phoneNumber, glimpsId });
  return;
};

export { sendText };
