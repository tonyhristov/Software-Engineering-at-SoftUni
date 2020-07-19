const { body } = require("express-validator");

module.exports = [
  body("title").custom((value) => {
    if (value === undefined) {
      throw new Error("The tittle input field should not be empty");
    }
    return true;
  }),
  body("description").custom((value) => {
    if (value === undefined) {
      throw new Error("The description input field should not be empty");
    }
    return true;
  }),
  body("imageUrl").custom((value) => {
    if (value === undefined) {
      throw new Error("The ImageUrl input field should not be empty");
    }
    return true;
  }),
];
