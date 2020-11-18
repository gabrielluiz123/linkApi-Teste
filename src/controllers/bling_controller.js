require("dotenv").config();
const axios = require("axios");
const querystring = require('querystring');
const js2xmlparser = require("js2xmlparser");

const blingService = require("../services/bling_service");
const insertDeal = require("../services/insert_deal_mongo");
const findDeal = require("../services/find_deal_mongo");

module.exports = async (request, response, next) => {
    for (var i = 0; i < request.body.response.data.length; i++) {
        let idDeal = request.body.response.data[i].id;
        let value = request.body.response.data[i].value;
        let statusDeal = request.body.response.data[i].status;
        let name = request.body.response.data[i].org_id.name;
        let email = request.body.response.data[i].org_id.cc_email;
        let nameDeal = request.body.response.data[i].title;
        let vendedor = request.body.response.data[i].creator_user_id.name;
        let emailVendedor = request.body.response.data[i].creator_user_id.email;
        let phoneOrg = request.body.response.data[i].person_id.phone.value;

        if (statusDeal == "won") {
            let findOrder = await findDeal.findDeal(idDeal);
            if (!findOrder) {
                let _sendOrder = blingService.sendOrder(name, email, idDeal, nameDeal, value);
                let _insertDeal = insertDeal.insertDeal(idDeal, nameDeal, value, vendedor, name, phoneOrg, email, emailVendedor);
            }
        }
        else {
            console.log('Oportunidade não está ganha!');
        }
    }
    return response.status(200).send({ message: "Pedidos Gerados com sucesso!" });

};