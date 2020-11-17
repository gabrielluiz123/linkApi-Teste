const { response } = require('express');
const jwt = require('jsonwebtoken');
const envFile = require("../config/env");

module.exports = (require, response, next) => {

    try {
        const token = require.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, envFile.env.JWT_KEY);
        require.user = decode;
        next();
    } catch (error) {
        return response.status(401).send({
            message: 'Falha na autenticaçãoo!'
        });
    }
}