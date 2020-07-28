const path = require("path");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get("/share", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/share.html"));
  });
  app.get("/receive", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/receive.html"));
  });
  app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });
};
