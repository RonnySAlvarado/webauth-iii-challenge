const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const registerRouter = require("./routes/registerRouter.js");
const loginRouter = require("./routes/loginRouter.js");
const usersRouter = require("./routes/usersRouter.js");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/auth/signup", registerRouter);
server.use("/api/auth/login", loginRouter);
server.use("/api/auth/users", usersRouter);

module.exports = server;
