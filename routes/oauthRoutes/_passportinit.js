const session = require("express-session");
const flash = require("flash");
const passport = require("passport");
require("dotenv").config();
module.exports = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(
    require("express-session")({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(session());
  app.use(flash());
};
