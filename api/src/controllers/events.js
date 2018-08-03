import { isValid } from "date-fns";
import validate from "uuid-validate";

import { successResponse, failureResponse } from "./responses";

import eventService from "../services/event";

const index = (req, res) => {
  res.status(200).send({ success: true, msg: "events" });
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const isValidUUID = validate(id, 4);
    if (!isValidUUID) {
      return failureResponse(res, "Not a valid UUID");
    }

    const event = await eventService.find(id);
    return successResponse(res, event);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

const create = async (req, res) => {
  let { name, date } = req.body;

  date = new Date(date);
  const isValidDate = isValid(date);
  if (!isValidDate) {
    return failureResponse(res, "Not a valid date.");
  }

  try {
    const event = await eventService.create(name, date);
    return successResponse(res, event);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

export default {
  index,
  show,
  create
};
