import uuidv4 from "uuid/v4";
import { format } from "date-fns";

import { Event } from "../models";

/**
 * @param {string} name
 * @param {Date} date
 */

const getSlug = (name, date) => {
  name = name.toLowerCase();
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

const create = (
  name,
  date,
  mainImageUrl = null,
  logoUrl = null,
  secretKey = null
) => {
  const slug = getSlug(name, date);

  return Event.create({
    id: uuidv4(),
    name: name,
    date: date,
    mainImageUrl: mainImageUrl,
    logoUrl: logoUrl,
    secretKey: secretKey,
    slug: slug
  });
};

/**
 * @param {string} id
 */
const find = id => Event.findById(id);

export default { create, find };
