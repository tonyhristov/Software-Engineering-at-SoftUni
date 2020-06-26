const Cube = require("../models/cube");

const getAllCubes = async () => {
  const cubes = await Cube.find().lean();
  return cubes;
};

const getOneCube = async (id) => {
  const cube = await Cube.findById(id).lean();
  return cube;
};

const getCubeWithAccessories = async (id) => {
  const cube = await Cube.findById(id).populate("accessories").lean();

  return cube;
};

const AddAccessory = async (cubeId, accessoryId) => {
  await Cube.findByIdAndUpdate(cubeId, {
    $addToSet: {
      accessories: [accessoryId],
    },
  });
};

const UpdateCube = async (cubeId, properties) => {
  await Cube.findByIdAndUpdate(cubeId, {
    $set: properties,
  });
};

const DeleteCube = async (cubeId) => {
  await Cube.findByIdAndDelete(cubeId);
};

module.exports = {
  getAllCubes,
  getOneCube,
  AddAccessory,
  getCubeWithAccessories,
  UpdateCube,
  DeleteCube,
};
