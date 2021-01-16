const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const enemySchema = new Schema({
  name: {
    type: String,
  },
  damage: {
    type: Number,
  },
  health: {
    type: Number,
  },
  fullHealth: {
    type: Number,
  },
  minExp: {
    type: Number,
  },
  maxExp: {
    type: Number,
  },
});

module.exports = {
  Enemy: mongoose.model("Enemy", enemySchema),
  enemySchema: enemySchema,
};
