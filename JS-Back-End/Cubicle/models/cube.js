const mongoose = require("mongoose");

const CubeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: [/^[A-Za-z0-9 ]+$/, "Cube name is not valid"],
    minLength: 5,
  },
  description: {
    type: String,
    required: true,
    minLength: 20,
    maxLength: 2000,
    match: [/^[A-Za-z0-9 ]+$/, "Description is not valid"],
  },
  imageUrl: { type: String, required: true },
  difficulty: { type: String, required: true },
  accessories: [{ type: "ObjectId", ref: "Accessory" }],
  creatorId: { type: "ObjectId", ref: "User" },
});

CubeSchema.path("imageUrl").validate(function (url) {
  return url.startsWith("http://") || url.startsWith("https://");
}, "Image URL is not valid!");

module.exports = mongoose.model("Cube", CubeSchema);
