const { response, request } = require("express");
const express = require("express");
const router = express.Router();

const pipeController = require("../controllers/pipedrive_controller");

const login = require('../middleware/login');

router.get('/', (request, response, next) => {
    response.status(200).send({
        mensagem: "Usando Rotas"
    });
});

router.post('/', login, pipeController.get_deals
);




module.exports = router;