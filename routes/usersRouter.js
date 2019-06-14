const router = require("express").Router();
const db = require("../data/dbMethods.js");
const restricted = require("./restricted.js");

router.get("/", restricted, async (req, res) => {
  try {
    const allUsers = await db.getUsers();
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(400).json({ message: "No users in the database." });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong with this request." });
  }
});

module.exports = router;
