const express = require("express");
const router = express.Router();
const path = require("path");
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
    // console.log(req.user);
    // if (req.user) {
    //   console.log(" IT IS WORKING");
    //   const salt = await bcrypt.genSalt(10);
    //   // email
    //   req.user.emails[0].value = await bcrypt.hash(req.user.emails[0].id, salt);
    //   // password
    //   req.user.id = await bcrypt.hash(req.user.id, salt);
    //   db.User.create({
    //     email: req.user.emails[0].value,
    //     info: req.user.id + "#",
    //   })
    //     .then((result) => {
    //       res.json(result);
    //       console.log(result);
    //     })
    //     .catch(({ message }) => {
    //       res.send(message);
    //       console.log(message);
    //     });
    // } else {
    // console.log("IT IS NOT WORKING");
    console.log(body);
    const salt = await bcrypt.genSalt(10);
    if (body.password.length < 6) {
      res.status(400).send("Password Must Be Greater Than 6 Characters");
    }
    body.password = await bcrypt.hash(body.password, salt);
    // items
    body.info === undefined
      ? (body.info = "[]")
      : (body.info = await cryptr.encrypt(body.info));
    //   Hash Items
    const items = `${body.info}`;
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
  // }
);

router.get("/", ({ body }, res) => {
  db.USer.findById(body)();
});

module.exports = router;
