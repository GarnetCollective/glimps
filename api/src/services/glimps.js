import { Glimps } from "../models";
import eventService from "./event";
import uuid from "uuid/v4";

import axios from "axios";

const tiler = axios.create({ baseURL: "http://localhost:3001" });

/**
 * @param {string} id
 */
const findById = id => Glimps.findById(id);

/**
 * @param {string} eventId
 * @param {Array<string>} data
 */
const create = async (eventId, data) => {
  let event = await eventService.findById(eventId);

  if (!event) {
    throw new Error("eventId is not valid");
  }

  let glimps;
  try {
    glimps = await tiler.post("/create", {
      eventName: event.name,
      brandImage: event.mainImageUrl,
      story: data
    });
  } catch (e) {
    console.error(`Glimps service: ${e.message}`);
    throw new Error("Could not make collage.");
  }

  return Glimps.create({
    id: uuid(),
    imageUrl: glimps.data.collage,
    thumbUrl: glimps.data.collage,
    eventId: event.id
  });
};

export default { findById, create };
