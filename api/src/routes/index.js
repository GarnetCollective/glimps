import { Router } from "express";

import events from "../controllers/events";
import glimps from "../controllers/glimps";
import eventGlimpses from "../controllers/eventGlimpses";
import textMessages from "../controllers/textMessages";
import authTokens from "../controllers/authTokens";

import authMiddleware from "../middleware/auth";
import authEventMiddleware from "../middleware/authEvent";
import authCreatorMiddleware from "../middleware/authCreator";

const apiRouter = Router();
const authRouter = Router();

apiRouter.get("/events", events.index);
apiRouter.get("/events/:id", events.show);
apiRouter.post("/events", authCreatorMiddleware, events.create);

apiRouter.get("/events/:id/glimpses", eventGlimpses.index);
apiRouter.post(
  "/events/:id/glimpses",
  authMiddleware,
  authEventMiddleware,
  eventGlimpses.create
);
apiRouter.get("/glimps/:id", glimps.show);
apiRouter.post("/text-messages/", authMiddleware, textMessages.create);

authRouter.post("/tokens", authTokens.create);

export { apiRouter, authRouter };
