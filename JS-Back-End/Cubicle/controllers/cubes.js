const { getCubes, getCube } = require("../controllers/database");

const getAllCubes = (callback) => {
  getCubes((cubes) => {
    callback(cubes);
  });
};
const getOneCube = (id, callback) => {
  getCube(id, (cubes) => {
    callback(cubes);
  });
};

module.exports = {
  getAllCubes,
  getOneCube,
};
