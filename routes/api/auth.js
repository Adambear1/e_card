const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcryptjs");
const Cryptr = require("cryptr");
cryptr = new Cryptr("devnami");

router.post("/", ({ body }, res) => {
  // Get To Edit Data On Front End
  db.User.findOne({ email: body.email })
    .then(async (data) => {
      console.log(data);
      const password = await data.info.split("#")[0];
      await bcrypt.compare(body.password, password, async (err, bool) => {
        if (err) {
          return await res.status(400).json({ msg: "Invalid Credentials." });
        } else {
          // If credentials are valid, identify if there are missing fields & where
          //   Local function to split and decrypt messages in succinct order
          function getPosition(index) {
            return data.info.split("#", index).join("#").length;
          }
          if (data.info) {
            try {
              const info = await cryptr.decrypt(
                data.info.substring(getPosition(1) + 1, getPosition(2))
              );
              await res.json({
                email: data.email,
                info: info,
              });
            } catch {
              res.send(data);
            }
          }
        }
      });
    })
    .catch((err) => {
      res.status(404).json({ msg: "User Does Not Exist" });
      console.error(err);
    });
});

module.exports = router;
