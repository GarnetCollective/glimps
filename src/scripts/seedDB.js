require("dotenv").config({ silent: true });

const { DB_URL } = process.env;

// db dependencies
const mongoose = require("mongoose");
const uuid = require("uuid");

// validation dependencies
const { isValid, format } = require("date-fns");
const bcrypt = require("bcryptjs");
const { convert } = require("emoji-text");

// scraping dependecies
const cheerio = require("cheerio");
const axios = require("axios");

const fetch_url = "https://mlh.io/seasons/na-2019/events";
const seedInstance = axios.create({ baseURL: fetch_url });

/** START DB Connection */
if (!DB_URL) {
  console.log("> 🙅🏻‍♂️ DB URL not provided");
  process.exit(0);
}

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

async function db() {
  Promise.resolve(mongoose.connect(DB_URL, options));
}
/** END DB Connection */

/** Mongoose schema definition */
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    _id: {
      type: String,
      binData: Buffer,
      index: true,
      unique: true,
      required: true,
      default: uuid.v4
    },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    mainImageUrl: { type: String, required: true },
    mainColor: { type: String, default: "#6870FF" },
    logoUrl: { type: String, required: true },
    secretKey: { type: String, required: true },
    slug: { type: String }
  },
  { timestamps: true, autoIndex: false }
);

const Event = mongoose.model("Event", eventSchema);

/**
 * Main executed function
 */
async function seedDB() {
  try {
    const events = await fetchHTML();

    // Hash secret Key
    const secretKey = "admin";
    let hashedSecret = null;
    if (secretKey) {
      hashedSecret = await bcrypt.hash(secretKey, 8);
    }

    await Promise.all(
      events.map(async event => {
        event.secretKey = hashedSecret;
        await Event.create(event);
      })
    );
  } catch (e) {
    throw e;
  }
}

/**
 * @param {string} slug
 */
function sanitizeSlug(slug) {
  return slug
    .trim()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/[^a-zA-Z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

/**
 * @param {string} name
 * @param {Date} date
 */
function getSlug(name, date) {
  name = convert(name, { delimiter: "" });
  name = sanitizeSlug(name);
  date = format(date, "MMDDYYYY");

  return `${name}-${date}`;
}

/** Fetch HTML from URL */
async function fetchHTML() {
  const { data } = await seedInstance.get(fetch_url);

  const $ = cheerio.load(data);

  let events = new Array();

  $(".feature .row .event").each((i, el) => {
    const name = $(el)
      .find("h3")
      .text();

    const _date = $(el)
      .find("*[itemprop = 'startDate']")
      .attr("content");

    const date = new Date(_date);

    const logoUrl = $(el)
      .find(".event-logo img")
      .attr("src");

    const mainImageUrl = $(el)
      .find(".image-wrap img")
      .attr("src");

    // Validate date format
    const isValidDate = isValid(date);

    if (isValidDate) {
      // Create slug
      const slug = getSlug(name, date);

      const event = {
        name,
        date,
        mainImageUrl,
        logoUrl,
        slug
      };

      events.push(event);
    }
  });

  return events;
}

db()
  .then(() => console.log("> 🗄  Mongo connected"))
  .catch(e => console.log(e.message));

seedDB()
  .then(() => {
    console.log("> 🚀 Seeded the DB");
    process.exit(0);
  })
  .catch(e => console.log(e.message));
