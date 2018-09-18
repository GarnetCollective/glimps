const { COURIER_HOST } = process.env;
import axios from "axios";

const courierClient = axios.create({ baseURL: COURIER_HOST });

/**
 *
 * @param {string} toPhone
 * @param {Glimps} glimps
 */
const sendGlimpsText = async (toPhone, glimps) => {
  let operationRes = {
    success: true,
    error: null
  };

  try {
    const mailRes = await courierClient.post("/api/text", {
      number: toPhone,
      message: `Thanks for using glimps.app. Here's your image. ${
        glimps.imageUrl
      }`
    });

    console.log("messaging_service", mailRes.data);
    return operationRes;
  } catch (error) {
    console.log("messaging_service: ", error);

    operationRes.success = false;
    if (error.response) {
      operationRes.error = error.response.data;
    } else {
      operationRes.error = error.message;
    }

    return operationRes;
  }
};

export default { sendGlimpsText };
