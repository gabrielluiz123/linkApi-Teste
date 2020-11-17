const { response } = require('express');
const jwt = require('jsonwebtoken');
const envFile = require("../routes/config/env");

module.exports = (require, response, next) => {

    try {
        const token = require.headers.authorization.split(' ')[1];
        const decode = jwt.verify(require.body.token, envFile.env.JWT_KEY);
        require.usuario = decode;
        next();
    } catch (error) {
        return response.status(401).send({
            menssagem: 'Falha na autenticação!'
        });
    }


}