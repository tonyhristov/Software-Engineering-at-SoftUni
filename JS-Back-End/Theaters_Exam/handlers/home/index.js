const Play = require("../../handlers/plays/Play");
module.exports = {
  get: {
    home(req, res, next) {
      const isPublic = req.user !== undefined;

      if (!isPublic) {
        Play.find({ isPublic: true })
          .lean()
          .then((plays) => {
            res.render("home/home", {
              isLoggedIn: req.user !== undefined,
              userEmail: req.user ? req.user.username : "",
              plays: plays,
              isPublic: isPublic,
            });
          });
      } else {
        Play.find()
          .lean()
          .then((plays) => {
            res.render("home/home", {
              isLoggedIn: req.user !== undefined,
              userEmail: req.user ? req.user.username : "",
              plays: plays,
            });
          });
      }
    },
  },
  post: {},
};
