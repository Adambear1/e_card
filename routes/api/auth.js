const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcryptjs");
const Cryptr = require("cryptr");
cryptr = new Cryptr("devnami");

router.get("/", ({ body }, res) => {
  db.User.findOne({ email: body.email })
    .then(async (data) => {
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
          //   If empty field, then double # is present
          if (data.info.includes("##")) {
            //   Local function to split and decrypt messages in succinct order
            function trimHash() {
              return data.info.split("##");
            }
            // Find Name
            // If website is left blank, then after trimming hash, the second item in array (index 1), will be blank
            if (trimHash()[1].length === 0 && trimHash[2] !== undefined) {
              console.log("Name");
              const name = cryptr.decrypt(
                data.info.substring(getPosition(1) + 1, trimHash()[0].length)
              );
              res.json({
                email: data.email,
                name: name,
                website: "",
                occupation: "",
              });
              //   Find Website
              //   Else, if the second item in array (index 1) is not blank, then name is blank and website is not.
            } else if (trimHash()[1].length > 1) {
              console.log("Website");
              const website = cryptr.decrypt(
                trimHash()[1].slice(1, trimHash()[1].length)
              );
              res.json({
                email: data.email,
                name: "",
                website: website,
                occupation: "",
              });
            }
            // Find Occupation
            // If occupation is left blank, then both second and third items are blank
            if (
              trimHash()[0].length > 1 &&
              trimHash()[1] == "" &&
              trimHash()[2].length > 1
            ) {
              console.log("Occupation");
              const occupation = cryptr.decrypt(
                trimHash()[2].slice(1, trimHash()[2].length)
              );

              res.json({
                email: data.email,
                name: "",
                website: "",
                occupation: occupation,
              });
            }
          }
          //   If no empty fields, then no double #
          else {
            const name = await cryptr.decrypt(
              data.info.substring(getPosition(1) + 1, getPosition(2))
            );
            const website = cryptr.decrypt(
              data.info.substring(getPosition(2) + 1, getPosition(3))
            );
            const occupation = cryptr.decrypt(
              data.info.substring(getPosition(3) + 1, getPosition(4))
            );
            console.log(name);
            await res.json({
              email: data.email,
              name: name,
              website: website,
            });
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
