const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/dbMethods.js");

router.post("/", validCredentials, async (req, res) => {
  const credentials = req.body;
  const hash = bcrypt.hashSync(credentials.password, 14);
  credentials.password = hash;
  try {
    console.log(credentials);
    const registerUser = await db.register(credentials);
    res.status(201).json(registerUser);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong with this request." });
  }
});

function validCredentials(req, res, next) {
  try {
    if (
      req.body.username.length &&
      req.body.password.length &&
      req.body.department.length
    ) {
      next();
    } else {
      res.status(400).json({
        message: "Please include a username, password, and a department."
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong with this request." });
  }
}

module.exports = router;
