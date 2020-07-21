const router = require("express").Router();
const handler = require("../handlers/plays");
const isAuth = require("../utils/isAuth");
const validations = require("../utils/validator");

router.get("/home", handler.get.availablePlays);
router.get("/create-play", isAuth(), handler.get.createPlay);
router.get("/details-play/:id", isAuth(), handler.get.detailsPlay);
router.get("/delete-play/:id", isAuth(), handler.get.deletePlay);
router.get("/like-play/:id", isAuth(), handler.get.likePlay);
router.get("/edit-play/:id", isAuth(), handler.get.editPlay);

router.post("/create-play", isAuth(), validations, handler.post.createPlay);
router.post("/edit-play/:id", isAuth(), handler.post.editPlay);

module.exports = router;
