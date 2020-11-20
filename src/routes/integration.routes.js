const express = require("express");
const router = express.Router();

const integrationMiddleware = require("../middleware/middleware_integration");
const blingController = require("../controllers/bling_controller");

const login = require('../middleware/login');
//Rota de integração do pipedrive com o bling. Após passar pela verificação do login, envia para a middleware de
//integração para requisitar os dados do pipe e após isso envia para o controller do bling
router.get('/linkApi', login, integrationMiddleware, blingController);


module.exports = router;    