const { body } = require("express-validator");

module.exports = [
  body("directions").custom((value) => {
    if (!value.includes(" - ")) {
      throw new Error(
        "The directions input  field should include ' - ' between the start and end point"
      );
    }
    return true;
  }),
  body("dateTime").custom((value) => {
    if (!value.includes(" - ")) {
      throw new Error(
        "The directions input  field should include ' - ' between the date and time"
      );
    }
    return true;
  }),
];
