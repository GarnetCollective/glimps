require("dotenv").config({ silent: true });

const { DB_URL } = process.env;

// validation dependencies
const { isValid, format } = require("date-fns");
const bcrypt = require("bcryptjs");
const { convert } = require("emoji-text");

// scraping dependecies
const cheerio = require("cheerio");
const axios = require("axios");

const fetch_url = "https://mlh.io/seasons/na-2019/events";
const api_url = "http://localhost:3000";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdG9yS2V5IjoiJGJpZW5zdXBlcm5pY2UiLCJpYXQiOjE1NTA3OTM0MDUsImV4cCI6MTU1MDc5NzAwNX0.G7UWsnfhR19o3JqwyeS2QSQsWkGy0F9PLW-BfB2Yb4k";

const seedInstance = axios.create({ baseURL: fetch_url });
const apiInstance = axios.create({
  baseURL: api_url,
  headers: { Authorization: `Bearer ${token}` }
});

/**
 * Main executed function
 */
async function seedDB() {
  try {
    const secretKey = await bcrypt.hash("admin", 8);
    const events = await fetchHTML(secretKey);

    await Promise.all(
      events.map(async event => {
        const { data } = await apiInstance.post("/api/events", event);
        return data;
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
async function fetchHTML(secretKey) {
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
        slug,
        secretKey
      };

      events.push(event);
    }
  });

  return events;
}

seedDB()
  .then(() => {
    console.log("> 🚀 Seeded the DB");
    process.exit(0);
  })
  .catch(e => console.log(e.message));
