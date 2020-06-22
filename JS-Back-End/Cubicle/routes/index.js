const { Router } = require("express");
const { getAllCubes } = require("../controllers/cubes");

const router = Router();

router.get("/", async (req, res) => {
  const cubes = await getAllCubes();
  res.render("index", { title: "Cubicle", cubes: cubes });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Cubicle" });
});

router.get("*", (req, res) => {
  res.render("404", { title: "Not Found" });
});

module.exports = router;
