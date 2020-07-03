const mongoose = require("mongoose");
const { Schema, model: Model } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tripHistory: [
    {
      type: "ObjectId",
      ref: "Trip",
    },
  ],
});

userSchema.methods = {
  passwordsMatch(password) {
    return bcrypt.compare(password, this.password);
  },
};

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }

      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        this.password = hash;
        next();
      });
    });
    return;
  }
  next();
});

module.exports = new Model("User", userSchema);
