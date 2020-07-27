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
};
