const { Router } = require("express");

const router = Router();

router.get("/login", (req, res) => {
  res.render("loginPage");
});

router.get("/register", (req, res) => {
  res.render("registerPage");
});

module.exports = router;
