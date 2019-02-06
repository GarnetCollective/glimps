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

// Events
apiRouter.get("/events", events.index);
apiRouter.get("/events/:id", events.show);
apiRouter.post("/events", authCreatorMiddleware, events.create);

// Glimps
apiRouter.get("/event-glimpses/", eventGlimpses.index);
apiRouter.get("/glimps/:id", glimps.show);
apiRouter.post(
  "/events/:id/glimpses",
  authMiddleware,
  authEventMiddleware,
  eventGlimpses.create
);

// Courier
apiRouter.post("/text-messages/", authMiddleware, textMessages.create);

authRouter.post("/tokens", authTokens.create);

export { apiRouter, authRouter };
