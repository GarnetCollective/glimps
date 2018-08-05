import { Glimps } from "../models";
import eventService from "./event";
import uuid from "uuid/v4";

/**
 * @param {string} id
 */
const find = id => Glimps.findById(id);

const create = async (eventId, imageUrl, thumbUrl) => {
  let event = await eventService.find(eventId);

  if (!event) {
    throw new Error("eventId is not valid");
  }

  return Glimps.create({
    id: uuid(),
    imageUrl: imageUrl,
    thumbUrl: thumbUrl,
    eventId: event.id
  });
};

export default { find, create };
