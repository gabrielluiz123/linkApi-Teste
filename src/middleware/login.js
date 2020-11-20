const { response } = require('express');
const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = (require, response, next) => {

    try {
        const token = require.headers.authorization.split(' ')[1];
        //verifica se o token enviado no header do request é válido
        const decode = jwt.verify(token, process.env.JWT_KEY);
        require.user = decode;
        //Envia o request para a próxima rota
        next();
    } catch (error) {
        return response.status(401).send({
            message: 'Falha na autenticação!'
        });
    }
}