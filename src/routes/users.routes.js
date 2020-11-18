const express = require("express");
const router = express.Router();

const userController = require("../controllers/usuario_controller");

router.post('/login', userController.login);

module.exports = router;