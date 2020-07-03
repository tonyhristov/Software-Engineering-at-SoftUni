const User = require("../users/User");
const { validationResult } = require("express-validator");
const Trip = require("./Trip");

module.exports = {
  get: {
    sharedTrips(req, res, next) {
      Trip.find()
        .lean()
        .then((trips) => {
          res.render("trips/sharedTrips", {
            isLoggedIn: req.user !== undefined,
            userEmail: req.user ? req.user.email : "",
            trips,
          });
        });
    },
    offerTrip(req, res, next) {
      res.render("trips/offerTrip", {
        isLoggedIn: req.user !== undefined,
        userEmail: req.user ? req.user.email : "",
      });
    },
    detailsTrip(req, res, next) {
      const { id } = req.params;

      Trip.findById(id)
        .populate("buddies")
        .lean()
        .then((trip) => {
          const currentUser = JSON.stringify(req.user._id);
          const availableSeats = trip.seats - trip.buddies.length;
          res.render("trips/details-trip", {
            isLoggedIn: req.user !== undefined,
            userEmail: req.user ? req.user.email : "",
            trip,
            isDriver: JSON.stringify(trip.driver) === currentUser,
            isAlreadyJoined: JSON.stringify(trip.buddies).includes(currentUser),
            isSeatsAvailable: availableSeats > 0,
            availableSeats,
          });
        });
    },
    closeTrip(req, res, next) {
      const { id } = req.params;
      Trip.deleteOne({ _id: id }).then((deletedTrip) => {
        res.redirect("/trip/shared-trips/");
      });
    },
    jointTrip(req, res, next) {
      const { id } = req.params;
      const { _id } = req.user;

      Promise.all([
        Trip.updateOne({ _id: id }, { $push: { buddies: _id } }),
        User.updateOne({ _id }, { $push: { tripHistory: id } }),
      ]).then(([updatedTrip, updatedUser]) => {
        res.redirect(`/trip/details-trip/${id}`);
      });
    },
  },
  post: {
    offerTrip(req, res, next) {
      const { directions, dateTime, carImage, seats, description } = req.body;

      const [startPoint, endPoint] = directions.split(" - ");
      const [date, time] = dateTime.split(" - ");
      const { _id } = req.user._id;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.render("trips/offerTrip", {
          isLoggedIn: req.user !== undefined,
          userEmail: req.user ? req.user.email : "",
          message: errors.array()[0].msg,
        });
        return;
      }

      Trip.create({
        startPoint,
        endPoint,
        date,
        time,
        carImage,
        seats,
        description,
        driver: _id,
      }).then((createdTrip) => {
        res.redirect("/trip/shared-trips");
      });
    },
  },
};
