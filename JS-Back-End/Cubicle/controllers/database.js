const fs = require("fs");
const path = require("path");

const databaseFilePath = path.join(__dirname, "..", "config/database.json");

const saveCube = (cube, callback) => {
  getCubes((cubes) => {
    cubes.push(cube);
    fs.writeFile(databaseFilePath, JSON.stringify(cubes), (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log("New cube is successfully created!");
      callback();
    });
  });
};

const getCube = (id, callback) => {
  getCubes((cubes) => {
    const cube = cubes.filter((cube) => cube.id === id)[0];
    callback(cube);
  });
};

const getCubes = (callback) => {
  fs.readFile(databaseFilePath, (err, dbData) => {
    if (err) {
      console.error(err);
    }

    const cubes = JSON.parse(dbData);
    callback(cubes);
  });
};

module.exports = {
  getCube,
  getCubes,
  saveCube,
};
