const { Router } = require("express");
const { getAllCubes } = require("../controllers/cubes");
const { getUserStatus } = require("../controllers/user");

const router = Router();

router.get("/", getUserStatus, async (req, res) => {
  const cubes = await getAllCubes();
  res.render("index", {
    title: "Cubicle",
    cubes: cubes,
    isLoggedIn: res.isLoggedIn,
  });
});

router.get("/about", getUserStatus, (req, res) => {
  res.render("about", { title: "About Cubicle", isLoggedIn: res.isLoggedIn });
});

router.get("*", getUserStatus, (req, res) => {
  res.render("404", { title: "Not Found", isLoggedIn: res.isLoggedIn });
});

router.get("logout", (req, res) => {
  res.clearCookie("aid");

  res.redirect("/");
});

module.exports = router;
