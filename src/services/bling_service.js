require("dotenv").config();
const axios = require("axios");
const querystring = require('querystring');
const js2xmlparser = require("js2xmlparser");

module.exports = {
    sendOrder: function (name, email, idDeal, nameDeal, value) {
        const order = {
            cliente: {
                nome: name,
                tipoPessoa: 'J',
                email: email,
            },
            itens: [
                {
                    item: {
                        codigo: idDeal,
                        descricao: nameDeal,
                        un: 'un',
                        qtde: 1,
                        vlr_unit: value,
                    },
                },
            ]
        };

        const orderXml = encodeURIComponent(js2xmlparser.parse('pedido', order, { declaration: { encoding: 'UTF-8' } }));


        var post = querystring.stringify({
            apikey: process.env.API_KEY_BLING,
            xml: orderXml
        });
        const resp = axios.post('https://bling.com.br/Api/v2/pedido/json/', post).catch(function (error) {
            if (error.response) {
                return resp = error.response;
            }
        });
        return resp;

    }
}