module.exports = (app) => {
  app.get("/api/dashboard", (req, res) => {
    try {
      res.send(req);
    } catch (err) {
      res.send(err);
      console.error(err);
    }
  });
};
