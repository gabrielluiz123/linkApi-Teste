const express = require("express");
const router = express.Router();

const pipeController = require("../controllers/pipedrive_controller");

const login = require('../middleware/login');

router.get('/linkApi', login, pipeController.get_deals);


module.exports = router;