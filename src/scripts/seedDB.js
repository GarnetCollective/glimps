require("dotenv").config({ silent: true });

// scraping dependecies
const cheerio = require("cheerio");
const axios = require("axios");

const fetch_url = "https://mlh.io/seasons/na-2019/events";
const api_url = "http://localhost:3000";

const token = "";

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
    const events = await fetchHTML();

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

    const event = {
      name,
      date,
      mainImageUrl,
      logoUrl,
      secretKey: "admin"
    };

    events.push(event);
  });

  return events;
}

seedDB()
  .then(() => {
    console.log("> 🚀 Seeded the DB");
    process.exit(0);
  })
  .catch(e => console.log(e.message));
