const { Router } = require("express");
const { saveUser } = require("../controllers/user");

const router = Router();

router.get("/login", (req, res) => {
  res.render("loginPage");
});

router.get("/signup", (req, res) => {
  res.render("registerPage");
});

router.post("/signup", async (req, res) => {
  const status = await saveUser(req, res);

  if (status) {
    res.redirect("/");
  }
});

module.exports = router;
