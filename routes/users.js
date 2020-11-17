const express = require("express");
const router = express.Router();
const users = require("./config/user");
const envFile = require("./config/env");
const jwt = require("jsonwebtoken");

router.get('/', (request, response, next) => {
    response.status(200).send({
        mensagem: "Usando Rotas"
    });
});

router.post('/', (request, response, next) => {
    response.status(200).send({
        mensagem: "Usando post Rotas"
    });
});

router.post('/login', (request, response, next) => {
    const senha = users.senha;
    const usuario = users.usuario;

    if (request.body.senha == senha && request.body.usuario == usuario) {
        const token = jwt.sign({
            usuario: usuario,
        }, envFile.env.JWT_KEY, {
            expiresIn: "2h",

        });
        return response.status(200).send({ mensagem: "Autorizado com sucesso!", token: token });
    }
    return response.status(401).send({ mensagem: "Falha na autorização!" });
});

module.exports = router;