const { Router } = require("express");
const { getAllCubes, getOneCube } = require("../controllers/cubes");
const Cube = require("../models/cube");

const router = Router();

router.get("/", async (req, res) => {
  const cubes = await getAllCubes();
  res.render("index", { title: "Cubicle", cubes: cubes });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Cubicle" });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create Cube" });
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const cube = new Cube({
    name,
    description,
    imageUrl,
    difficulty: difficultyLevel,
  });

  cube.save((err) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect("/");
    }
  });
});

router.get("/details/:id", async (req, res) => {
  const cube = await getOneCube(req.params.id);

  res.render("details", { title: "Details", ...cube });
});

router.get("*", (req, res) => {
  res.render("404", { title: "Not Found" });
});

module.exports = router;
