import axios from "react-native-axios";
import { AsyncStorage } from "react-native";

import config from "./config";

const courier = axios.create({ baseURL: config.BASE_URL });

courier.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("EVENT_TOKEN");

    if (token) config.headers = { Authorization: "bearer " + token };

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

const sendText = async (phoneNum, glimpsId) => {
  console.log({ phoneNum, glimpsId });
  const url = `/text-messages`;

  try {
    courier.post(url, { phoneNum, glimpsId });
  } catch (e) {
    throw new Error(e.message);
  }
};

export { sendText };
