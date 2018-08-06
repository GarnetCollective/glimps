import axios from "react-native-axios";

const BASE_URL = "http://6a6f54ec.ngrok.io/api/glimps";

const story = axios.create({ baseURL: BASE_URL });

const createCollage = async pictures => {
  const eventId = "2a50ee1a-6add-419e-ae8a-da6621e035d5";
  try {
    const { data } = await story.post("/", {
      eventId: eventId,
      data: pictures
    });

    if (data.success) {
      return { collage: data.data.thumbUrl };
    } else {
      return { collage: "https://bit.ly/2OJZZPa" };
    }
  } catch (e) {
    return { collage: "https://bit.ly/2OJZZPa" };
  }
};

export { createCollage };
