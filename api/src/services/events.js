import uuidv4 from "uuid/v4";
import bcrypt from "bcryptjs";
import { format } from "date-fns";
import { convert } from "emoji-text";

import { Event } from "../models";

/**
 * @param {string} slug
 */

const sanitizeSlug = slug =>
  slug
    .trim()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/[^a-zA-Z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

/**
 * @param {string} name
 * @param {Date} date
 */

const getSlug = (name, date) => {
  name = convert(name, { delimiter: "" });
  name = sanitizeSlug(name);
  date = format(date, "MMDDYYYY");

  return `${name}-${date}`;
};

/**
 * Creates a new event
 * @param {string} name
 * @param {Date} date
 * @param {string} mainImageUrl
 * @param {string} logoUrl
 * @param {string} secretKey
 */

const create = async (
  name,
  date,
  mainImageUrl = null,
  mainColor = null,
  logoUrl = null,
  secretKey = null
) => {
  const slug = getSlug(name, date);

  let hashedSecret = null;
  if (secretKey) {
    hashedSecret = await bcrypt.hash(secretKey, 8);
  }

  let event = await Event.create({
    id: uuidv4(),
    name,
    date,
    mainImageUrl,
    mainColor,
    logoUrl,
    secretKey: hashedSecret,
    slug
  });

  return findById(event.id);
};

/**
 * @param {string} id
 * @param {string} secretKey
 */
const verifySecret = async (id, secretKey) => {
  let event = await Event.findById(id);
  let verified = await bcrypt.compare(secretKey, event.secretKey);
  return verified ? event : false;
};

/**
 * @param {string} id
 * @returns {Promise<any>}
 */
const findById = async id =>
  Event.findById(id, { attributes: { exclude: ["secretKey"] } });

/**
 * @param {string} slug
 * @returns {Promise<any>}
 */
const findBySlug = async slug => {
  return Event.findOne({
    where: { slug },
    limit: 1,
    attributes: { exclude: ["secretKey"] }
  });
};

const find = (limit = 10, offset = 0) =>
  Event.findAll({
    offset: offset,
    limit: limit,
    attributes: { exclude: ["secretKey"] }
  });

export default { create, findById, findBySlug, find, verifySecret };
