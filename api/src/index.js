import "./env";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

const { PORT, APP_NAME, NODE_ENV } = process.env;

const app = express();

// Express middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));

// Routes
import apiRoutes from "./routes";
app.use("/api", apiRoutes);

app.listen(PORT, err => {
  err && console.log(err.message);
  console.log(`> in ${NODE_ENV}`);
  console.log(`> ${APP_NAME} listening on port ${PORT}`);
});
