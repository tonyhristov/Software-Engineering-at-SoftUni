const mongoose = require("mongoose");
const { Schema, model: Model } = mongoose;
const bcrypt = require("bcrypt");

const playSchema = Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  isPublic: {
    type: Boolean,
  },
  createdAt: {
    type: String,
  },
  creator: {
    type: "ObjectId",
    ref: "User",
  },
  usersLiked: [
    {
      type: "ObjectId",
      ref: "User",
    },
  ],
});

module.exports = new Model("Play", playSchema);
