const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcryptjs");
const Cryptr = require("cryptr");
cryptr = new Cryptr("devnami");

router.get("/", ({ body }, res) => {
  db.User.findOne({ email: body.email })
    .then(async (data) => {
      const password = await data.info.split("###")[0];
      await bcrypt.compare(body.password, password, async (err, bool) => {
        if (err) {
          return await res.status(400).json({ msg: "Invalid Credentials." });
        } else {
          await res.json(data);
        }
      });
    })
    .catch((err) => {
      res.status(404).json({ msg: "User Does Not Exist" });
      console.error(err);
    });
});

module.exports = router;
