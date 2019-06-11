const knex = require("knex");
const knexConfig = require("../knexfile.js").development;

const db = knex(knexConfig);

module.exports = db;
