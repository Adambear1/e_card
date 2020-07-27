const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
module.exports = (app) => {
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

  // Route
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  app.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/failed",
      failureFlash: true,
    }),
    (req, res) => {
      res.redirect("/dashboard.html");
    }
  );
  app.get("/api/oauth", (req, res) => {
    res.json(req.user);
    console.log(req.user);
  });
};
