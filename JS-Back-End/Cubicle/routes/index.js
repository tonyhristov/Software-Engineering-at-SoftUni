const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Cubicle" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Cubicle" });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create Cube" });
});

router.get("/details/:id", (req, res) => {
  res.render("details", { title: "About Cube" });
});

router.get("*", (req, res) => {
  res.render("404", { title: "Not Found" });
});

module.exports = router;
