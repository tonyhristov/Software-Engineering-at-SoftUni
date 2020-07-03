const mongoose = require("mongoose");
const { Schema, model: Model } = mongoose;
const bcrypt = require("bcrypt");

const tripSchema = Schema({
  startPoint: {
    type: String,
  },
  endPoint: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  seats: {
    type: Number,
  },
  description: {
    type: String,
  },
  carImage: {
    type: String,
  },
  driver: {
    type: "ObjectId",
    ref: "User",
  },
  buddies: [
    {
      type: "ObjectId",
      ref: "User",
    },
  ],
});

module.exports = new Model("Trip", tripSchema);
