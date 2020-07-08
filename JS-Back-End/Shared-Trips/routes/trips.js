const router = require("express").Router();
const handler = require("../handlers/trips");
const isAuth = require("../utils/isAuth");
const validations = require("../utils/validator");

router.get("/shared-trips", isAuth(), handler.get.sharedTrips);
router.get("/offer-trip", isAuth(), handler.get.offerTrip);
router.get("/details-trip/:id", isAuth(), handler.get.detailsTrip);
router.get("/close-trip/:id", isAuth(), handler.get.closeTrip);
router.get("/join-trip/:id", isAuth(), handler.get.jointTrip);

router.post("/offer-trip", isAuth(), validations, handler.post.offerTrip);

module.exports = router;
