module.exports = (app) => {
  app.get("/api/dashboard", (req, res) => {
    try {
      res.send(req.body);
    } catch (err) {
      res.send(err);
      console.error(err);
    }
  });
};
