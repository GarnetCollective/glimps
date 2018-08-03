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

export default { show };
