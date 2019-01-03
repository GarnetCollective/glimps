import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import jwt from "jsonwebtoken";
import eventsService from "../services/events";
const { SECRET_KEY } = process.env;

passport.use(
  new BearerStrategy(async (token, done) => {
    let eventId;
    try {
      let decoded = await jwt.verify(token, SECRET_KEY);
      eventId = decoded.eventId;
    } catch (err) {
      return done(null, false);
    }

    try {
      let event = await eventsService.findById(eventId);

      return done(null, event);
    } catch (err) {
      return done(err);
    }
  })
);

const authMiddleware = passport.authenticate("bearer", { session: false });

export default authMiddleware;
