import { Glimps } from "../models";
import eventService from "./events";
import uuid from "uuid/v4";
const { COURIER_HOST } = process.env;

import axios from "axios";
const tiler = axios.create({ baseURL: COURIER_HOST });

/**
 * @typedef {Object} Event
 * @property {string} id
 * @property {string} name
 * @property {date} date
 * @property {string} mainImageUrl
 * @property {string} logoUrl
 * @property {string} secretKey
 * @property {string} slug
 */

/**
 * @param {Event} event
 * @param {string} data
 */
const makeGlimps = async (event, data) => {
  try {
    const glimps = await tiler.post("/create", {
      eventName: event.name,
      brandImage: event.mainImageUrl,
      story: data
    });
    return glimps.data;
  } catch (e) {
    console.error(`Glimps service: ${e.message}`);
    return null;
  }
};

/**
 * @param {string} id
 * @returns {Promise}
 */
const findById = id => Glimps.findById(id);

/**
 * @param {string} eventId
 * @returns {Promise}
 */
const findByEventId = eventId =>
  Glimps.findAll({
    where: {
      eventId: eventId
    }
  });

/**
 * @param {string} eventId
 * @param {Array<string>} data
 */
const create = async (eventId, data) => {
  let event = await eventService.findById(eventId);

  if (!event) {
    throw new Error("eventId is not valid");
  }

  let glimps = await makeGlimps(event, data);

  if (!glimps) {
    throw new Error("Could not make collage.");
  }

  return Glimps.create({
    id: uuid(),
    imageUrl: glimps.collage,
    thumbUrl: glimps.collage,
    eventId: event.id
  });
};

export default { findById, findByEventId, create };
