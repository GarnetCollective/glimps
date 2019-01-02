import "./env";
import "./db";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import passport from "passport";

const { PORT, APP_NAME, NODE_ENV } = process.env;

import { apiRouter, authRouter } from "./routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(passport.initialize());

app.use("/api", apiRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`> In ${NODE_ENV}`);
  console.log(`> ${APP_NAME} listening on ${PORT}`);
});
