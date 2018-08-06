import { Router } from "express";

import events from "../controllers/events";
import glimps from "../controllers/glimps";
import eventGlimpses from "../controllers/eventGlimpses";

const apiRouter = Router();

apiRouter.get("/events", events.index);
apiRouter.get("/events/:id", events.show);
apiRouter.post("/events", events.create);

apiRouter.get("/events/:id/glimpses", eventGlimpses.index);
apiRouter.post("/events/:id/glimpses", eventGlimpses.create);

apiRouter.get("/glimps/:id", glimps.show);

export default apiRouter;
