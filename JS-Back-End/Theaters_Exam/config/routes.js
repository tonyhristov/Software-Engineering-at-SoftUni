const routes = require("../routes");

module.exports = (app) => {
  app.use("/home", routes.home);
  app.use("/user", routes.users);
  app.use("/play", routes.plays);
};
