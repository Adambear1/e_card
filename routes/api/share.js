const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", ({ body }, res) => {
  db.User.findOne({ email: body.email }).then(async (data) => {
    await res.json(data);
  });
});

module.exports = router;
