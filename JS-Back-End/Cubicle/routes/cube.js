const env = process.env.NODE_ENV || "development";

const config = require("../config/config")[env];
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const Cube = require("../models/cube");
const { getCubeWithAccessories, getOneCube } = require("../controllers/cubes");
const { DeleteCube, UpdateCube } = require("../controllers/cubes");
const { authAccessJson, authAccess } = require("../controllers/user");
const { getUserStatus, isAuthor } = require("../controllers/user");

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

router.get("/editCube/:id", authAccess, getUserStatus, async (req, res) => {
  const cube = await getOneCube(req.params.id);
  const isCreator = isAuthor(req, res, cube.creatorId);

  res.render("editCubePage", {
    title: "Edit Cube",
    ...cube,
    isLoggedIn: res.isLoggedIn,
    isAuthor: isCreator,
  });
});

router.post("/editCube/:id", authAccessJson, async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const cube = {
    name: name,
    description: description,
    imageUrl: imageUrl,
    difficulty: difficultyLevel,
  };

  await UpdateCube(req.params.id, cube);

  res.redirect(`/details/${req.params.id}`);
});

router.get("/deleteCube/:id", authAccess, getUserStatus, async (req, res) => {
  const cube = await getOneCube(req.params.id);
  const isCreator = isAuthor(req, res, cube.creatorId);

  res.render("deleteCubePage", {
    title: "Delete Cube",
    ...cube,
    isLoggedIn: res.isLoggedIn,
    isAuthor: isCreator,
  });
});

router.post("/deleteCube/:id", authAccessJson, async (req, res) => {
  const id = req.params.id;

  await DeleteCube(id);

  res.redirect(`/`);
});

router.get("/details/:id", getUserStatus, async (req, res) => {
  const cube = await getCubeWithAccessories(req.params.id);

  const isCreator = isAuthor(req, res, cube.creatorId);

  res.render("details", {
    title: "Details",
    ...cube,
    isLoggedIn: res.isLoggedIn,
    isAuthor: isCreator,
  });
});

module.exports = router;
