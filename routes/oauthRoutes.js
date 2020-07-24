const passport = require("passport");
const { config } = require("process");
const session = require("express-session");
const FacebookStrategy = require("passport-facebook").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const LinkedinStrategy = require("passport-linkedin").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
module.exports = (app) => {
  // init
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  app.use(
    session({
      secret: "eCard",
      resave: true,
      saveUninitialized: true,
    })
  );
  // Facebook
  const FBOptions = {
    clientID: process.env.FB_APP_ID,
    clientSecret: process.env.FB_APP_SECRET,
    callbackURL: "http://localhost:5000/facebook/callback",
  };
  const FBCallback = function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  };
  passport.use(new FacebookStrategy(FBOptions, FBCallback));
  //   Github
  const GHOptions = {
    clientID: process.env.GH_APP_ID,
    clientSecret: process.env.GH_APP_SECRET,
    callbackURL: "http://localhost:5000/github/callback",
  };
  const GHCallback = function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  };
  passport.use(new GithubStrategy(GHOptions, GHCallback));
  //   Google
  const GOptions = {
    clientID: process.env.G_APP_ID,
    clientSecret: process.env.G_APP_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
  };
  const GCallback = function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  };
  passport.use(new LinkedinStrategy(GOptions, GCallback));
  //   Linkedin
  const GOptions = {
    clientID: process.env.G_APP_ID,
    clientSecret: process.env.G_APP_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
  };
  const GCallback = function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  };
  passport.use(new GoogleStrategy(GOptions, GCallback));
};
