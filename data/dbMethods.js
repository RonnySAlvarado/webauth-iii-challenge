const db = require("./dbConfig.js");

module.exports = {
  register,
  getUsers
};

function register(newUser) {
  return db("users").insert(newUser);
}

// function login () {
//     return
// }

function getUsers() {
  return db("users");
}
