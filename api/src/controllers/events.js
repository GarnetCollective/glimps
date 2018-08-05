import { isValid } from "date-fns";
import validate from "uuid-validate";

import { successResponse, failureResponse } from "./responses";

import eventService from "../services/event";

const index = async (req, res) => {
  try {
    const { limit, offset } = req.params;
    let events = await eventService.find(limit, offset);
    return successResponse(res, events);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const isValidUUID = validate(id, 4);
    if (!isValidUUID) {
      return failureResponse(res, "Not a valid UUID");
    }

    const event = await eventService.findById(id);
    return successResponse(res, event);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

const create = async (req, res) => {
  let { name, date, mainImageUrl } = req.body;

  date = new Date(date);
  const isValidDate = isValid(date);
  if (!isValidDate) {
    return failureResponse(res, "Not a valid date.");
  }

  try {
    const event = await eventService.create(name, date, mainImageUrl);
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
