import "./env";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const { PORT = 3000, APP_NAME = "API" } = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));

app.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Hello boi" });
});

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }

  if (__DEV__) {
    console.log("> in development");
  }
  console.log(`> ${APP_NAME} listening on port ${PORT}`);
});
