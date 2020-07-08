const Trips = require("../trips");

module.exports = {
  get: {
    home(req, res, next) {
      res.render("home/home", {
        isLoggedIn: req.user !== undefined,
        userEmail: req.user ? req.user.email : "",
      });
    },
  },
  post: {},
};
