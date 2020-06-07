const Cube = require('../models/cube');

const newCube = new Cube('Default', 'This is a default cube', '', 1);

newCube.save();

console.log(newCube);
