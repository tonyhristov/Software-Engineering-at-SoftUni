const express = require("express");
const User = require("../handlers/users/User");
const cookieParser = require("cookie-parser");
const handlebars = require("express-handlebars");
const { cookie } = require("../config/config");
const jwt = require("../utils/jwt");

module.exports = (app) => {
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.engine(
    ".hbs",
    handlebars({
      layoutsDir: "views",
      defaultLayout: "base-layout",
      partialsDir: "views/partials",
      extname: ".hbs",
    })
  );

  app.use(express.static("static"));
  app.set("view engine", ".hbs");
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: false }));
};
