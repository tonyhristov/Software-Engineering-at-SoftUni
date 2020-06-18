const mongoose = require("mongoose");

const AccessorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxLength: 2000 },
  imageUrl: { type: String, required: true },
  difficulty: { type: Number, required: true, min: 1, max: 10 },
  accessories: [{ type: "ObjectId", ref: "Cube" }],
});

module.exports = mongoose.model("Cube", AccessorySchema);
