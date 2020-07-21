const User = require("./User");
const jwt = require("../../utils/jwt");
const { cookie } = require("../../config/config");

module.exports = {
  get: {
    login(req, res, next) {
      res.render("users/login");
    },
    register(req, res, next) {
      res.render("users/register");
    },
    logout(req, res, next) {
      req.user = null;
      res.clearCookie(cookie).redirect("/home/");
    },
  },
  post: {
    login(req, res, next) {
      const { username, password } = req.body;

      User.findOne({ username })
        .then((user) => {
          return Promise.all([user.passwordsMatch(password), user]);
        })
        .then(([match, user]) => {
          if (!match) {
            throw new Error("Username or password are not correct");
          }

          const token = jwt.createToken(user);

          res
            .status(201)
            .cookie(cookie, token, { maxAge: 3600000 })
            .redirect("/home/");
        })
        .catch((err) => {
          res.render("users/login", {
            message: err.message,
            oldInput: { username, password },
          });
        });
    },
    register(req, res, next) {
      const { username, password, rePassword } = req.body;

      if (password !== rePassword) {
        res.render("users/register", {
          message: "Passwords do not match",
          oldInput: { username, password, rePassword },
        });
        return;
      }

      User.findOne({ username })
        .then((currentUser) => {
          if (currentUser) {
            throw new Error("Username is already used");
          }
          return User.create({ username, password });
        })
        .then((createdUser) => {
          return res.redirect("/user/login");
        })
        .catch((err) => {
          res.render("users/register", {
            message: err.message,
            oldInput: { username, password, rePassword },
          });
        });
    },
  },
};
