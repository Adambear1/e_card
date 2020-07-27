const passport = require("passport");
// const FacebookStrategy = require("passport-facebook").Strategy;
// const GithubStrategy = require("passport-github").Strategy;
// const LinkedinStrategy = require("passport-linkedin-oauth2").Strategy;
// const SpotifyStrategy = require("passport-spotify").Strategy;
// const YahooStrategy = require("passport-yahoo-oauth").Strategy;
// const TumblrStrategy = require("passport-tumblr").Strategy;
// const SlackStrategy = require("passport-slack").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const axios = require("axios");
require("dotenv").config();
module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  app.use(
    require("express-session")({
      secret: "eCard",
      resave: true,
      saveUninitialized: true,
    })
  );
  //   Google
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.G_APP_ID,
        clientSecret: process.env.G_APP_SECRET,
        callbackURL: "http://localhost:5000/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        return done(null, profile);
      }
    )
  );
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  app.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/failed",
    }),
    (req, res) => {
      res.redirect("/dashboard.html");
    }
  );
};
