import { successResponse, failureResponse } from "./responses";
import jwt from "jsonwebtoken";
import eventsService from "../services/events";
const { SECRET_KEY } = process.env;

const create = async (req, res) => {
  try {
    const { eventId, secret } = req.body;

    let verifiedEvent = await eventsService.verifySecret(eventId, secret);
    if (!verifiedEvent) {
      throw new Error(`Couldn't verify secret for event ${eventId}`);
    }

    const token = jwt.sign({ eventId: verifiedEvent._id }, SECRET_KEY);
    return successResponse(res, token);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

export default { create };
