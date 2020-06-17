module.exports = {
  development: {
    port: process.env.PORT || 3000,
    databaseUrl:
      `mongodb+srv://user:${process.env.DB_PASSWORD}@softuni-nrtjw.mongodb.net/cubicle?retryWrites=true&w=majority`,
  },
  production: {},
};
