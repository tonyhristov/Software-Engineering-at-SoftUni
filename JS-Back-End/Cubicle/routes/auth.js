const { Router } = require("express");
const { saveUser, verifyUser, guestAccess } = require("../controllers/user");
const { getUserStatus } = require("../controllers/user");

const router = Router();

router.get("/login", guestAccess, getUserStatus, (req, res) => {
  res.render("loginPage", { isLoggedIn: res.isLoggedIn });
});

router.post("/login", async (req, res) => {
  const status = await verifyUser(req, res);

  if (status) {
    res.redirect("/");
  }
});

router.get("/signup", guestAccess, getUserStatus, (req, res) => {
  res.render("registerPage", { isLoggedIn: res.isLoggedIn });
});

router.post("/signup", async (req, res) => {
  const status = await saveUser(req, res);

  if (status) {
    res.redirect("/");
  }
});

module.exports = router;
