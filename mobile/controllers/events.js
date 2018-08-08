import axios from "react-native-axios";

const BASE_URL = "http://6a6f54ec.ngrok.io";

const event = axios.create({ baseURL: BASE_URL });

const getEvents = async () => {
  try {
    const events = await event.get("/events");
  } catch (e) {
    return e.message;
  }
};

const verifyEvent = async (id, key) => {
  try {
    const event = await event.get(`/events/${id}`, { secretKey: key });
  } catch (e) {
    return e.message;
  }
};

export { getEvents, verifyEvent };
