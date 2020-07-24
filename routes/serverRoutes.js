const path = require("path");
const passport = require("passport");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/send", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/send.html"));
  });
  app.get("/receive", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/receive.html"));
  });
  app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });
  // oauth
  // oauth => facebook
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
      failureRedirect: "/failed",
    }),
    (req, res) => {
      res.redirect("/dashboard.html");
    }
  );
  // oauth => github
  app.get("/auth/github", passport.authenticate("github"));
  app.get(
    "/github/callback",
    passport.authenticate("github", {
      failureRedirect: "/failed",
    }),
    (req, res) => {
      res.redirect("/dashboard.html");
    }
  );
  // oauth => google
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
  // oauth => linkedin
  app.get(
    "/auth/linkedin",
    passport.authenticate("linkedin", { scope: ["profile", "email"] })
  );
  app.get(
    "/linkedin/callback",
    passport.authenticate("linkedin", {
      failureRedirect: "/failed",
    }),
    (req, res) => {
      res.redirect("/dashboard.html");
    }
  );
};
