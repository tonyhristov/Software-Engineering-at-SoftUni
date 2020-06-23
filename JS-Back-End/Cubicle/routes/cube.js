const { Router } = require("express");
const { getCubeWithAccessories } = require("../controllers/cubes");
const Cube = require("../models/cube");

const router = Router();

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
      res.redirect("/create");
    } else {
      res.redirect("/");
    }
  });
});

router.get("/edit", (req, res) => {
  res.render("editCubePage");
});

router.get("/delete", (req, res) => {
  res.render("deleteCubePage");
});

router.get("/details/:id", async (req, res) => {
  const cube = await getCubeWithAccessories(req.params.id);

  res.render("details", { title: "Details", ...cube });
});

module.exports = router;
