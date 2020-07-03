const { Router } = require("express");
const handler = require("../handlers/home");
const isAuth = require("../utils/isAuth");

const router = Router();

router.get("/", isAuth(true), handler.get.home);

module.exports = router;
