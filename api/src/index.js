import "./env";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import passport from "passport";

const { PORT, APP_NAME, NODE_ENV } = process.env;

import { sequelize } from "./models";

import { apiRouter, authRouter } from "./routes";

const app = express();

if (NODE_ENV !== "test") {
  sequelize
    .sync()
    // .sync({ force: true })
    .then(() => console.log("> DB & Tables created."))
    .catch(e => console.log(e.message));
}

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(passport.initialize());

app.use("/api", apiRouter);
app.use("/auth", authRouter);

if (NODE_ENV !== "test") {
  app.listen(PORT, err => {
    err && console.log(err.message);
    console.log(`> in ${NODE_ENV}`);
    console.log(`> ${APP_NAME} listening on port ${PORT}`);
  });
}

export default app;
