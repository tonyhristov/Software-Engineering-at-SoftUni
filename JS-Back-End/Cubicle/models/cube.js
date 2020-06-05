const { v4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const databaseFilePath = path.join(__dirname, "..", "config/database.json");

class Cube {
  constructor(name, description, imageUrl, difficulty) {
    this.id = v4();
    this.name = name || "No Name";
    this.description = description;
    this.imageUrl = imageUrl || "placeholder";
    this.difficulty = difficulty || 0;
  }

  save() {
    const newCube = {
      id: this.id,
      name: this.name,
      description: this.description,
      imageUrl: this.imageUrl,
      difficulty: this.difficulty,
    };

    fs.readFile(databaseFilePath, (err, dbData) => {
      if (err) {
        console.error(err);
      }

      const cubes = JSON.parse(dbData);
      cubes.push(newCube);

      fs.writeFile(databaseFilePath, JSON.stringify(cubes), (err, data) => {
        if (err) {
          console.error(err);
        }
        console.log("New cube is successfully created!");
      });
    });
  }
}

module.exports = Cube;
