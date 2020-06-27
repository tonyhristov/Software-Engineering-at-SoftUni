const env = process.env.NODE_ENV || "development";

const jwt = require("jsonwebtoken");
const User = require("../models/user");
const config = require("../config/config")[env];
const bcrypt = require("bcrypt");

const generateToken = (data) => {
  const token = jwt.sign(data, config.privateKey);

  return token;
};

const saveUser = async (req, res) => {
  const { username, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = new User({ username, password: hashedPassword });
    const userObject = await user.save();
    const token = generateToken(
      { userID: userObject._id, username: userObject.username },
      config.privateKey
    );

    res.cookie("aid", token);

    return token;
  } catch (e) {
    return {
      error: true,
      message: e,
    };
  }
};

const verifyUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return {
        error: true,
        message: "There is no such user!",
      };
    }

    const status = await bcrypt.compare(password, user.password);
    const token = generateToken(
      { userID: user._id, username: user.username },
      config.privateKey
    );
    res.cookie("aid", token);

    return {
      error: !status,
      message: status || "Wrong Password",
    };
  } catch (e) {
    return {
      error: true,
      message: "There is no such user!",
      status,
    };
  }
};

const authAccess = (req, res, next) => {
  const token = req.cookies["aid"];

  if (!token) {
    res.redirect("/");
  }

  try {
    jwt.verify(token, config.privateKey);
    next();
  } catch (err) {
    return res.redirect("/");
  }
};

const authAccessJson = (req, res, next) => {
  const token = req.cookies["aid"];

  if (!token) {
    return res.json({ error: "Not authenticated" });
  }

  try {
    jwt.verify(token, config.privateKey);
    next();
  } catch (err) {
    return res.json({ error: "Not authenticated" });
  }
};

const guestAccess = (req, res, next) => {
  const token = req.cookies["aid"];

  if (token) {
    return res.redirect("/");
  }
  next();
};

const getUserStatus = (req, res, next) => {
  const token = req.cookies["aid"];

  if (!token) {
    res.isLoggedIn = false;
  }

  try {
    jwt.verify(token, config.privateKey);
    res.isLoggedIn = true;
  } catch (err) {
    res.isLoggedIn = false;
  }

  next();
};

const isAuthor = (req, res, creatorId) => {
  const token = req.cookies["aid"];
  let decodedToken = jwt.decode(token);

  if (!token) {
    return false;
  } else {
    return decodedToken.userID == creatorId;
  }
};

module.exports = {
  saveUser,
  verifyUser,
  authAccess,
  guestAccess,
  getUserStatus,
  authAccessJson,
  isAuthor,
};
