const express = require("express");
const helmet = require("helmet");// incripts data

const carRouter = require("../routes/carRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/cars", carRouter);

module.exports = server;
