const env = process.env.NODE_ENV || "development";

const config = require("../config/config")[env];
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const Cube = require("../models/cube");
const { getCubeWithAccessories } = require("../controllers/cubes");
const { authAccessJson } = require("../controllers/user");
const { authAccess } = require("../controllers/user");
const { getUserStatus } = require("../controllers/user");

const router = Router();

router.get("/create", authAccess, getUserStatus, (req, res) => {
  res.render("create", { title: "Create Cube", isLoggedIn: res.isLoggedIn });
});

router.post("/create", authAccessJson, (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const token = req.cookies["aid"];

  const decodedObject = jwt.verify(token, config.privateKey);

  const cube = new Cube({
    name,
    description,
    imageUrl,
    difficulty: difficultyLevel,
    creatorId: decodedObject.userID,
  });

  cube.save((err) => {
    if (err) {
      console.error(err);
      res.redirect("/create");
    } else {
      res.redirect("/");
    }
  });
});

router.get("/edit", authAccess, getUserStatus, (req, res) => {
  res.render("editCubePage", { isLoggedIn: res.isLoggedIn });
});

router.get("/delete", authAccess, getUserStatus, (req, res) => {
  res.render("deleteCubePage", { isLoggedIn: res.isLoggedIn });
});

router.get("/details/:id", getUserStatus, async (req, res) => {
  const cube = await getCubeWithAccessories(req.params.id);

  res.render("details", {
    title: "Details",
    ...cube,
    isLoggedIn: res.isLoggedIn,
  });
});

module.exports = router;
