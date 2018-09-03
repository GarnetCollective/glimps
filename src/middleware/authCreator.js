import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import jwt from "jsonwebtoken";
const { CREATOR_KEY, SECRET_KEY } = process.env;

passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      let decoded = await jwt.verify(token, SECRET_KEY);
      let creatorKey = decoded.creatorKey;
      if (creatorKey !== CREATOR_KEY) {
        return done(null, false);
      }
      return done(null, true);
    } catch (err) {
      return done(null, false);
    }
  })
);

const authCreator = passport.authenticate("bearer", {
  session: false
});

export default authCreator;
