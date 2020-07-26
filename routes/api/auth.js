const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcryptjs");

router.get("/", async ({ body }, res) => {
  db.User.findOne({ email: body.email })
    .then((data) => {
      const salt = bcrypt.genSalt(10);
      const password = data.info.split("###")[0];
      const userPassword = bcrypt.hash(body.password, salt);
      bcrypt.compare(userPassword, password, (err, data) => {
        if (err) {
          return res.status(400).json({ msg: "Invalid Credentials." });
        } else {
          res.send(data);
        }
      });
    })
    .catch((err) => {
      res.status(404).json({ msg: "User Does Not Exist" });
    });
});

module.exports = router;
