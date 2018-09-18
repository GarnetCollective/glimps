import { emptyResponse, failureResponse } from "./responses";
import glimpsService from "../services/glimps";
import messagingService from "../services/messaging";

const create = async (req, res) => {
  try {
    const { phoneNumber, glimpsId } = req.body;

    if (!phoneNumber) {
      throw new Error("phoneNumber is required");
    }

    let glimps = await glimpsService.findById(glimpsId);
    if (!glimps) {
      throw new Error("glimpsId is not valid");
    }

    let messageOp = await messagingService.sendGlimpsText(phoneNumber, glimps);
    if (!messageOp.success) {
      throw new Error(messageOp.error);
    }

    return emptyResponse(res);
  } catch (e) {
    return failureResponse(res, e.message);
  }
};

export default { create };
