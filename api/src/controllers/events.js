import { isValid } from "date-fns";

import { successResponse, failureResponse } from "./responses";

import eventsService from "../services/events";

const index = async (req, res) => {
  try {
    let { limit = null, offset = null } = req.query;

    limit = limit && parseInt(limit);
    offset = offset && parseInt(offset);

    let events = await eventsService.find(limit, offset);
    return successResponse(res, events);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await eventsService.findById(id);

    return successResponse(res, event);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

const create = async (req, res) => {
  let { name, date, mainImageUrl, mainColor, logoUrl, secretKey } = req.body;

  date = new Date(date);
  const isValidDate = isValid(date);
  if (!isValidDate) {
    return failureResponse(res, "Not a valid date.");
  }

  try {
    const event = await eventsService.create(
      name,
      date,
      mainImageUrl,
      mainColor,
      logoUrl,
      secretKey
    );
    return successResponse(res, event);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

export default { index, show, create };
