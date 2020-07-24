const User = require("../users/User");
const { validationResult } = require("express-validator");
const Play = require("./Play");

module.exports = {
  get: {
    availablePlays(req, res, next) {
      Play.find()
        .lean()
        .then((plays) => {
          res.redirect("/home");
        });
    },
    createPlay(req, res, next) {
      res.render("plays/create-play", {
        isLoggedIn: req.user !== undefined,
        userEmail: req.user ? req.user.username : "",
      });
    },
    editPlay(req, res, next) {
      const { id } = req.params;

      Play.findById(id)
        .lean()
        .then((play) => {
          const currentUser = JSON.stringify(req.user._id);
          res.render("plays/edit-play", {
            isLoggedIn: req.user !== undefined,
            userEmail: req.user ? req.user.username : "",
            play: play,
            isPublic: play.isPublic,
            creator: JSON.stringify(play.creator) === currentUser,
          });
        });
    },
    detailsPlay(req, res, next) {
      const { id } = req.params;

      Play.findById(id)
        .lean()
        .then((play) => {
          const currentUser = JSON.stringify(req.user._id);
          res.render("plays/details-play", {
            isLoggedIn: req.user !== undefined,
            userEmail: req.user ? req.user.username : "",
            play: play,
            creator: JSON.stringify(play.creator) === currentUser,
            isLiked: JSON.stringify(play.usersLiked).includes(currentUser),
          });
        });
    },
    deletePlay(req, res, next) {
      const { id } = req.params;
      Play.deleteOne({ _id: id }).then((deletedPlay) => {
        res.redirect("/home");
      });
    },
    likePlay(req, res, next) {
      const { id } = req.params;
      const { _id } = req.user;

      Promise.all([
        Play.updateOne({ _id: id }, { $push: { usersLiked: _id } }),
        User.updateOne({ _id }, { $push: { likedPlays: id } }),
      ]).then(([updatedTrip, updatedUser]) => {
        res.redirect(`/play/details-play/${id}`);
      });
    },
  },
  post: {
    createPlay(req, res, next) {
      const { title, description, imageUrl, isPublic } = req.body;

      const { _id } = req.user._id;

      const ts = new Date(Date.now()).toLocaleString();

      const fields = {
        title,
        description,
        imageUrl,
        isPublic,
      };

      if (title === "") {
        return IsEmpty(req, res, title, "create-play", fields);
      }
      if (title === "") {
        return IsEmpty(req, res, description, "create-play", fields);
      }
      if (title === "") {
        return IsEmpty(req, res, imageUrl, "create-play", fields);
      }

      let publicPlay = false;
      if (isPublic === "on") {
        publicPlay = true;
      }

      Play.create({
        title,
        description,
        imageUrl,
        isPublic: publicPlay,
        createdAt: ts,
        creator: _id,
      }).then((createdTrip) => {
        res.redirect("/home");
      });
    },
    editPlay(req, res, next) {
      const { title, description, imageUrl, isPublic } = req.body;
      const { id } = req.params;

      let publicPlay = false;
      if (isPublic === "on") {
        publicPlay = true;
      }

      Play.updateOne(
        { _id: id },
        {
          $set: {
            title: title,
            description: description,
            imageUrl: imageUrl,
            isPublic: publicPlay,
          },
        }
      ).then((editedPlay) => {
        res.redirect(`/play/details-play/${id}`);
      });
    },
  },
};

function IsEmpty(req, res, field, page, fields) {
  console.log(fields);
  if (field === "") {
    res.render(`plays/${page}`, {
      isLoggedIn: req.user !== undefined,
      userEmail: req.user ? req.user.username : "",
      message: `${field} field should not be empty`,
      play: fields,
    });
  }
}
