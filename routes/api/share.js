const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/:email", (req, res) => {
  console.log(req.params.email);
  db.User.findOne({ email: req.params }).then(async (data) => {
    await res.json(data);
  });
});

module.exports = router;
