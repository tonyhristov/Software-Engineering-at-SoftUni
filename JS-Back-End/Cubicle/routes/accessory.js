const { Router } = require("express");
const Accessory = require("../models/accessory");
const { getOneCube, AddAccessory } = require("../controllers/cubes");
const { getAccessories } = require("../controllers/accessories");
const { authAccess } = require("../controllers/user");
const { authAccessJson } = require("../controllers/user");
const { getUserStatus } = require("../controllers/user");
const router = Router();

router.get("/create/accessory", authAccess, getUserStatus, (req, res) => {
  res.render("createAccessory", {
    title: "Create Accessory",
    isLoggedIn: res.isLoggedIn,
  });
});

router.post("/create/accessory", authAccessJson, async (req, res) => {
  const { name, description, imageUrl } = req.body;

  try {
    const accessory = new Accessory({ name, description, imageUrl });
    await accessory.save();

    return res.redirect("/");
  } catch (e) {
    res.render("createAccessory", {
      title: "Create Accessory",
      isLoggedIn: res.isLoggedIn,
      error: "Accessory details are not valid!",
    });
  }
});

router.get(
  "/attach/accessory/:id",
  authAccess,
  getUserStatus,
  async (req, res) => {
    const cube = await getOneCube(req.params.id);
    const accessories = await getAccessories();

    const cubeAccessories = cube.accessories.map((acc) =>
      acc._id.valueOf().toString()
    );

    const notAttachedAccessories = accessories.filter((acc) => {
      const accessoriesString = acc._id.valueOf().toString();
      return !cubeAccessories.includes(accessoriesString);
    });

    const canAttachAccessory =
      cube.accessories.length !== accessories.length && accessories.length > 0;

    res.render("attachAccessory", {
      title: "Attach Accessory",
      ...cube,
      accessories: notAttachedAccessories,
      canAttachAccessory,
      isLoggedIn: res.isLoggedIn,
    });
  }
);

router.post("/attach/accessory/:id", authAccessJson, async (req, res) => {
  const { accessory } = req.body;
  await AddAccessory(req.params.id, accessory);

  res.redirect(`/details/${req.params.id}`);
});

module.exports = router;
