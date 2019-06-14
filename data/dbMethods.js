const db = require("./dbConfig.js");

module.exports = {
  register,
  findUser,
  getUsers
};

function register(newUser) {
  return db("users").insert(newUser);
}

function findUser(username) {
  return db("users")
    .where({ username: username })
    .first();
}

function getUsers() {
  return db("users");
}
