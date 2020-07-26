const passport = require("passport");
// const FacebookStrategy = require("passport-facebook").Strategy;
// const GithubStrategy = require("passport-github").Strategy;
// const LinkedinStrategy = require("passport-linkedin-oauth2").Strategy;
// const SpotifyStrategy = require("passport-spotify").Strategy;
// const YahooStrategy = require("passport-yahoo-oauth").Strategy;
// const TumblrStrategy = require("passport-tumblr").Strategy;
// const SlackStrategy = require("passport-slack").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
module.exports = (app) => {
  // Facebook
  // const FBOptions = {
  //   clientID: process.env.FB_APP_ID,
  //   clientSecret: process.env.FB_APP_SECRET,
  //   callbackURL: "http://localhost:5000/facebook/callback",
  // };
  // const FBCallback = function (accessToken, refreshToken, profile, done) {
  //   return done(null, profile);
  // };
  // passport.use(new FacebookStrategy(FBOptions, FBCallback));

  //   Github
  // const GHOptions = {
  //   clientID: process.env.GH_APP_ID,
  //   clientSecret: process.env.GH_APP_SECRET,
  //   callbackURL: "http://localhost:5000/github/callback",
  // };
  // const GHCallback = function (accessToken, refreshToken, profile, done) {
  //   return done(null, profile);
  // };
  // passport.use(new GithubStrategy(GHOptions, GHCallback));
  //   Google
  const GOptions = {
    clientID: process.env.G_APP_ID,
    clientSecret: process.env.G_APP_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
  };
  const GOCallback = function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  };
  passport.use(new GoogleStrategy(GOptions, GOCallback));
  //   Linkedin
  // const LIOptions = {
  //   clientID: process.env.LI_APP_ID,
  //   clientSecret: process.env.LI_APP_SECRET,
  //   callbackURL: "http://localhost:5000/linkedin/callback",
  // };
  // const LICallback = function (accessToken, refreshToken, profile, done) {
  //   return done(null, profile);
  // };
  // passport.use(new LinkedinStrategy(LIOptions, LICallback));
  //   Spotify
  // const SOptions = {
  //   clientID: process.env.S_APP_ID,
  //   clientSecret: process.env.S_APP_SECRET,
  //   callbackURL: "http://localhost:5000/spotify/callback",
  // };
  // const SCallback = function (accessToken, refreshToken, profile, done) {
  //   return done(null, profile);
  // };
  // passport.use(new SpotifyStrategy(SOptions, SCallback));
  // //   Yahoo
  // const YOptions = {
  //   clientID: process.env.Y_APP_ID,
  //   clientSecret: process.env.Y_APP_SECRET,
  //   callbackURL: "https://localhost:5000/yahoo/callback",
  // };
  // const YCallback = function (accessToken, refreshToken, profile, done) {
  //   return done(null, profile);
  // };
  // passport.use(new YahooStrategy(YOptions, YCallback));
  //   Tumblr
  // const TumblrOptions = {
  //   clientID: process.env.Tumblr_APP_ID,
  //   clientSecret: process.env.Tumblr_APP_SECRET,
  //   callbackURL: "https://localhost:5000/tumblr/callback",
  // };
  // const TumblrCallback = function (accessToken, refreshToken, profile, done) {
  //   return done(null, profile);
  // };
  // passport.use(new TumblrStrategy(TumblrOptions, TumblrCallback));
  //  Slack
  // const SlackOptions = {
  //   clientID: process.env.Slack_APP_ID,
  //   clientSecret: process.env.Slack_APP_SECRET,
  //   callbackURL: "http://localhost:5000/slack/callback",
  // };
  // const SlackCallback = function (accessToken, refreshToken, profile, done) {
  //   return done(null, profile);
  // };
  // passport.use(new SlackStrategy(SlackOptions, SlackCallback));
};
