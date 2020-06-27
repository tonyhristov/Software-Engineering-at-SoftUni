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
  const error = req.query.error ? "Username or password is not valid" : null;

  res.render("registerPage", { isLoggedIn: res.isLoggedIn, error });
});

router.post("/signup", async (req, res) => {
  const { password } = req.body;

  if (!password || password.length < 8 || !password.match(/^[A-Za-z0-9]+$/)) {
    return res.render("registerPage", {
      error: "Username or password is not valid",
    });
  }

  const { error } = await saveUser(req, res);

  if (error) {
    return res.render("registerPage", {
      error: "Username or password is not valid",
    });
  }

  res.redirect("/");
});

module.exports = router;
