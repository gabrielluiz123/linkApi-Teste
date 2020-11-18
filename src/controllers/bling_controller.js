require("dotenv").config();
const axios = require("axios");
var parseString = require('xml2js').parseString;
const querystring = require('querystring');
const js2xmlparser = require("js2xmlparser");

module.exports = (request, response, next) => {
    for (var i = 0; i < request.body.response.data.length; i++) {

        let idDeal = request.body.response.data[i].id;
        let value = request.body.response.data[i].value;
        let statusDeal = request.body.response.data[i].status;
        let name = request.body.response.data[i].org_id.name;
        let email = request.body.response.data[i].org_id.cc_email;
        let nameDeal = request.body.response.data[i].title;

        if (statusDeal == "won") {
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

            console.log(process.env.API_KEY_BLING);
            const resp = axios.post('https://bling.com.br/Api/v2/pedido/json/', post);
        }
        else {
            console.log('Oportunidade não está ganha!');
        }

    }


    return response.status(200).send({ data: "resp" });

};