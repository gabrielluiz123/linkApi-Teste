const express = require("express");

const pipedriveRoute = require("./pipedrive.routes");
const usersRoute = require("./users.routes");


const routes = express.Router();

routes.use(pipedriveRoute);
routes.use(usersRoute);

module.exports = routes;