const mongoose = require("mongoose");
const UserSchema = new Schema({
  //   name: {
  //     type: String,
  //     trim: true,
  //     lowercase: true,
  //     required: [true, "Full Name Required"],
  //   },
  //   email: {
  //     type: String,
  //     trim: true,
  //     lowercase: true,
  //     unique: true,
  //     validate: {
  //       validator: (email) => {
  //         return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  //       },
  //       message: "Please enter a valid email",
  //     },
  //     required: [true, "Email required"],
  //   },
  //   password: {
  //     type: String,
  //     trim: true,
  //     min: [6, "Must be at least 6 characters"],
  //     max: [25, "Must be fewer than 25 characters"],
  //     required: [true, "Password Required"],
  //   },
  //   phoneNumber: {
  //     type: String,
  //     trim: true,
  //     minlength: [9, "Please Enter 10 Digit Phone Number"],
  //     maxlength: [11, "Please Enter 10 Digit Phone Number"],
  //   },
  user_id: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
