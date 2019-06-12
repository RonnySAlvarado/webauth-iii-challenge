const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const registerRouter = require("./routes/registerRouter.js");
// const loginRouter = require("./routes/loginRouter.js");
// const usersRouter = require("./routes/usersRouter.js");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/register", registerRouter);
// server.use("/api/login", loginRouter);
// server.use("api/users", usersRouter);

module.exports = server;
