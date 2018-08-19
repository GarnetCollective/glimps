import "./env";
import express from "express";
import bodyParser from "body-parser";

const { PORT = 3003, APP_NAME = courier, NODE_ENV = development } = process.env;

import apiRoutes from "./routes";

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));

app.use("/api", apiRoutes);

app.listen(PORT, err => {
  err && console.log(err.message);
  console.log(`> in ${NODE_ENV}`);
  console.log(`> ${APP_NAME} listening on port ${PORT}`);
});

export default app;
