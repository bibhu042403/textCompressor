const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: "",
  },
  Sec_name: {
    type: String,
    default: "",
  },
  Email: {
    type: String,
    default: "",
  },
  phone_No: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
