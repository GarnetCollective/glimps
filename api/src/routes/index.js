import { Router } from "express";
import events from "../controllers/events";
import glimps from "../controllers/glimps";

const apiRouter = Router();

apiRouter.get("/events", events.index);
apiRouter.get("/events/:id", events.show);
apiRouter.post("/events", events.create);

apiRouter.get("/glimps", glimps.index);
apiRouter.get("/glimps/:id", glimps.show);

export default apiRouter;
