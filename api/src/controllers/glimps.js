import { successResponse, failureResponse } from "./responses";

import glimpsService from "../services/glimps";

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const glimps = glimpsService.find(id);
    return successResponse(res, glimps);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

const create = async (req, res) => {
  try {
    const {eventId} = req.body;
    const imageUrl = "https://i.imgur.com/hskaIfn.jpg";
    const thumbUrl = "https://i.imgur.com/hskaIfn.jpg";

    let glimps = await glimpsService.create(eventId, imageUrl, thumbUrl);
    return successResponse(res, glimps);
  } catch (e) {
    return failureResponse(res, e.message);
  }
}

export default { show, create };
