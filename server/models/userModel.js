const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  isUserRegistered: {
    type: Boolean,
    required: true,
  },
  isUserBlocked: { type: Boolean },
  email: {
    type: String,
    unique: true,
    index: true,
  },

  // vartotojo slaptažodis
  password: { type: String },

  role: {
    type: String,
    enum: ["warrior", "rogue", "wizard"],
  },
  level: {
    type: Number,
  },
  health: {
    type: Number,
  },

  experience: {
    type: Number,
  },
  stamina: {
    type: Number,
  },
  gold: {
    type: Number,
  },
  fullHealth: {
    type: Number,
  },
});

module.exports = {
  User: mongoose.model("User", userSchema),
  userSchema: userSchema,
};
