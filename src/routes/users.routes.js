const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const userController = require("../controllers/usuario_controller");

router.post('/login', userController.login);

module.exports = router;