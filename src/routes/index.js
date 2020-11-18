const express = require("express");

const pipedriveRoute = require("./integration.routes");
const usersRoute = require("./users.routes");
const endPoint = require("./endpoint.routes");


const routes = express.Router();

routes.use(pipedriveRoute);
routes.use(usersRoute);
routes.use(endPoint);

module.exports = routes;