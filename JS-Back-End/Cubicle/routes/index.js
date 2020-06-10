const { Router } = require("express");
const { getAllCubes, getOneCube } = require("../controllers/cubes");
const Cube = require("../models/cube");

const router = Router();

router.get("/", (req, res) => {
  getAllCubes((cubes) => {
    res.render("index", { title: "Cubicle", cubes: cubes });
  });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Cubicle" });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create Cube" });
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const cube = new Cube(name, description, imageUrl, difficultyLevel);

  cube.save(() => {
    res.redirect("/");
  });
});

router.get("/details/:id", (req, res) => {
  getOneCube(req.params.id, (cube) => {
    res.render("details", { title: "Details", ...cube });
  });
});

router.get("*", (req, res) => {
  res.render("404", { title: "Not Found" });
});

module.exports = router;
