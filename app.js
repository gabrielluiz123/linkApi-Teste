const express = require("express");
const app = express();

const pipeRotas = require('./routes/pipedrive');
const usersRotas = require('./routes/users');
const morgan = require("morgan");
const { request, response } = require("express");
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header('Acces-Control-Allow-Origin', '*');
    response.header('Acces-Control-Allow-header', 'Origin, X-Requestered-With, Content-Type, Accept, Authorization');
    if (request === 'OPTIONS') {
        response.header('Acces-Control-Allow-Methods', 'PUT', 'POST', 'GET');
        return response.status(200).send({});

    }
    next();

});

app.use('/pipeApi', pipeRotas);
app.use('/users', usersRotas);

app.use((request, response, next) => {
    const erro = new Error('Não encontrado!');
    erro.status = 404;
    next(erro);
});

app.use((error, request, response, next) => {
    response.status(error.status || 500);
    return response.send({
        error: {
            mensagem: error.message
        },
    })
});

module.exports = app;