import { successResponse, failureResponse } from "./responses";

import { sendText } from "../services/text";

const create = async (req, res) => {
  try {
    const { number, message } = req.body;

    const id = await sendText(number, message);

    successResponse(res, { msg: `Message sent to ${number}`, sid: id });
  } catch (e) {
    failureResponse(res, e.message);
  }
};

export default { create };
