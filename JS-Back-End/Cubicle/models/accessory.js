const mongoose = require("mongoose");

const AccessorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: [/^[A-Za-z0-9 ]+$/, "Description is not valid"],
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
  cubes: [{ type: "ObjectId", ref: "Cube" }],
});

AccessorySchema.path("imageUrl").validate(function (url) {
  return url.startsWith("http://") || url.startsWith("https://");
}, "Image URL is not valid!");

module.exports = mongoose.model("Accessory", AccessorySchema);
