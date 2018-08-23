import axios from "react-native-axios";

import config from "./config";

const story = axios.create({ baseURL: config.BASE_URL });

const createCollage = async pictures => {
  const eventId = "2a50ee1a-6add-419e-ae8a-da6621e035d5";
  const url = `/api/events/${eventId}/glimpses`;
  try {
    const { data } = await story.post(url, { data: pictures });

    if (data.success) {
      return { collage: data.data.thumbUrl };
    } else {
      return { collage: "https://bit.ly/2OJZZPa" };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

const createGif = async pictures => {
  try {
    const url = "http://70afd432.ngrok.io";
    const gif = await axios.post(`${url}/create`, {
      brandImage: "http://2016.mangohacks.com/img/logo.png",
      data: pictures,
      eventName: "whispered"
    });

    console.log(gif);
  } catch (e) {
    throw new Error(e.message);
  }
};

export { createCollage, createGif };
