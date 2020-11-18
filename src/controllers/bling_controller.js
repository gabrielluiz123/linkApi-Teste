require("dotenv").config();
const axios = require("axios");
const querystring = require('querystring');
const js2xmlparser = require("js2xmlparser");

const blingService = require("../services/bling_service");

module.exports = (request, response, next) => {
    for (var i = 0; i < request.body.response.data.length; i++) {
        let idDeal = request.body.response.data[i].id;
        let value = request.body.response.data[i].value;
        let statusDeal = request.body.response.data[i].status;
        let name = request.body.response.data[i].org_id.name;
        let email = request.body.response.data[i].org_id.cc_email;
        let nameDeal = request.body.response.data[i].title;

        if (statusDeal == "won") {
            let _ = blingService.sendOrder(name, email, idDeal, nameDeal, value);
        }
        else {
            console.log('Oportunidade não está ganha!');
        }
    }
    return response.status(200).send({ message: "Pedidos Gerados com sucesso!" });

};