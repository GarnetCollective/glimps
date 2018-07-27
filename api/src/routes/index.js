import { Router } from "express";

const apiRouter = Router();

import events from "../controllers/events";
apiRouter.use("/events", events);

import glimps from "../controllers/glimps";
apiRouter.use("/glimps", glimps);

export default apiRouter;
