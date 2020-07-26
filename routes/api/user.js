const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcryptjs");
const Cryptr = require("cryptr");
cryptr = new Cryptr("devnami");

const { check } = require("express-validator");

router.post(
  "/",
  [
    check("email", "Email must be present").isEmail(),
    check("password", "Password must be present").not().isEmpty(),
  ],
  async ({ body }, res) => {
    const salt = await bcrypt.genSalt(10);
    if (body.password.length < 6) {
      res.status(400).send("Password Must Be Greater Than 6 Characters");
    }
    body.password = await bcrypt.hash(body.password, salt);
    // items
    // items => name
    body.name === undefined
      ? (body.name = "#")
      : (body.name = await cryptr.encrypt(body.name));
    //   items => website
    body.website === undefined
      ? (body.website = "#")
      : (body.website = await cryptr.encrypt(body.website));
    // items => occupation
    body.occupation === undefined
      ? (body.occupation = "#")
      : (body.occupation = await cryptr.encrypt(body.occupation));
    //   items => location
    body.location == undefined
      ? (body.location = "#")
      : (body.location = await cryptr.encrypt(body.location));
    //   concatinating hashes
    const items = `${body.name}#${body.website}#${body.occupation}#${body.location}`;
    const hashItems = `${body.password}#${items}`;

    db.User.create({ email: body.email, info: hashItems })
      .then((result) => {
        res.json(result);
        console.log(result);
      })
      .catch(({ message }) => {
        res.send(message);
        console.log(message);
      });
  }
);

router.get("/", ({ body }, res) => {
  db.USer.findById(body)();
});

module.exports = router;
