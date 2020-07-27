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
  // app.get("/auth/facebook", passport.authenticate("facebook"));
  // app.get(
  //   "/facebook/callback",
  //   passport.authenticate("facebook", {
  //     failureRedirect: "/failed",
  //   }),
  //   (req, res) => {
  //     res.redirect("/dashboard.html");
  //   }
  // );
  // oauth => github
  // app.get("/auth/github", passport.authenticate("github"));
  // app.get(
  //   "/github/callback",
  //   passport.authenticate("github", {
  //     failureRedirect: "/failed",
  //   }),
  //   (req, res) => {
  //     res.redirect("/dashboard.html");
  //   }
  // );
  // oauth => google

  // oauth => linkedin
  // app.get("/auth/linkedin", passport.authenticate("linkedin"));
  // app.get(
  //   "/linkedin/callback",
  //   passport.authenticate("linkedin", {
  //     failureRedirect: "/failed",
  //   }),
  //   (req, res) => {
  //     res.redirect("/dashboard.html");
  //   }
  // );
  // oauth => spotify
  // app.get("/auth/spotify", passport.authenticate("spotify"));
  // app.get(
  //   "/spotify/callback",
  //   passport.authenticate("spotify", {
  //     failureRedirect: "/failed",
  //   }),
  //   (req, res) => {
  //     res.redirect("/dashboard.html");
  //   }
  // );
  // oauth => yahoo
  // app.get("/auth/yahoo", passport.authenticate("yahoo"));
  // app.get(
  //   "/yahoo/callback",
  //   passport.authenticate("yahoo", {
  //     failureRedirect: "/failed",
  //   }),
  //   (req, res) => {
  //     res.redirect("/dashboard.html");
  //   }
  // );
  // oauth => tumblr
  // app.get("/auth/tumblr", passport.authenticate("tumblr"));
  // app.get(
  //   "/tumblr/callback",
  //   passport.authenticate("tumblr", {
  //     failureRedirect: "/failed",
  //   }),
  //   (req, res) => {
  //     res.redirect("/dashboard.html");
  //   }
  // );
  // oauth => slack
  // app.get("/auth/slack", passport.authenticate("slack"));
  // app.get(
  //   "/slack/callback",
  //   passport.authenticate("slack", {
  //     failureRedirect: "/failed",
  //   }),
  //   (req, res) => {
  //     res.redirect("/dashboard.html");
  //   }
  // );
  app.get("/api/dashboard", (req, res) => {
    res.json(req.user);
  });
};
