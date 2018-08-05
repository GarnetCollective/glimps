import { successResponse, failureResponse } from "./responses";

import glimpsService from "../services/glimps";

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const glimps = await glimpsService.findById(id);
    return successResponse(res, glimps);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

const create = async (req, res) => {
  try {
    const { eventId, data } = req.body;

    let glimps = await glimpsService.create(eventId, data);
    return successResponse(res, glimps);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

export default { show, create };
