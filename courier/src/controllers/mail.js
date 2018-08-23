import { successResponse, failureResponse } from "./responses";

import { sendMail } from "../services/mail";

const create = async (req, res) => {
  try {
    const { email, message } = req.body;

    const envelope = await sendMail(email, message);

    successResponse(res, envelope);
  } catch (e) {
    failureResponse(res, e.message);
  }
};

export default { create };
