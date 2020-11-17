const express = require("express");
const router = express.Router();

const integrationMiddleware = require("../middleware/middleware_integration");
const blingController = require("../controllers/bling_controller");

const login = require('../middleware/login');

router.get('/linkApi', login, integrationMiddleware, blingController);


module.exports = router;