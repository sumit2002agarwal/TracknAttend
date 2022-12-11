const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//For Hashing the password
const UserDB = mongoose.model("userdb", Schema);

module.exports = UserDB;
