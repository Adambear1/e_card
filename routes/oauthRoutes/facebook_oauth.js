const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();
module.exports = (app) => {
  //   Facebook
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FB_APP_ID,
        clientSecret: process.env.FB_APP_SECRET,
        callbackURL: "http://localhost:5000/facebook/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        return done(null, profile);
      }
    )
  );
  // Route
  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: ["profile", "email"] })
  );
  app.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
      failureRedirect: "/failed",
      failureFlash: true,
    }),
    (req, res) => {
      res.redirect("/dashboard.html");
    }
  );
};
