const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const secrets = require("../secrets.js");
const db = require("../data/dbMethods.js");

router.post("/", validCredentials, async (req, res) => {
  const { username, password } = req.body;
  const user = await db.findUser(username);
  try {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res
        .status(200)
        .json({ message: `Welcome, ${user.username}! Have a token...`, token });
    } else {
      res.status(401).json({ message: "Invalid credentials." });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong with this request." });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

function validCredentials(req, res, next) {
  try {
    if (req.body.username.length && req.body.password.length) {
      next();
    } else {
      res.status(400).json({
        message: "Please include a username and password."
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong with this request." });
  }
}
module.exports = router;
