module.exports = (app) => {
  app.get("/api/dashboard", (req, res) => {
    try {
      res.json(req.profile);
    } catch (err) {
      res.send(err);
      console.error(err);
    }
  });
};
