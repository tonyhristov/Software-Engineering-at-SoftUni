require("dotenv").config();

const env = process.env.NODE_ENV;

const config = {
  development: {
    port: process.env.PORT,
    secret: process.env.SECRET,
    dbUrl: process.env.DB_URL,
    cookie: process.env.COOKIE,
  },
  production: {},
};

module.exports = config[env];
