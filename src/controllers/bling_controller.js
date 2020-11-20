require("dotenv").config();

const blingService = require("../services/bling_service");
const insertDeal = require("../services/insert_deal_mongo");
const findDeal = require("../services/find_deal_mongo");

module.exports = async (request, response, next) => {
    for (var i = 0; i < request.body.response.data.length; i++) {
        //dados do pipedrive enviados via request da rota
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
            //verifica se o deal já foi inserido no mongo
            let findOrder = await findDeal.findDeal(idDeal);
            if (typeof (findOrder) !== "boolean") {
                return response.status(500).send({ message: "Erro ao gerar pedidos!" });
            }
            if (findOrder === false) {
                //Envia os dados para o service responsável pelo tratamento dos dados do bling
                let _sendOrder = blingService(name, email, idDeal, nameDeal, value);
                if (!_sendOrder) {
                    return response.status(500).send({ message: "Erro ao gerar pedidos!" });
                }
                //Envia os dados para o serviço responsável pelo MongoDB
                let _insertDeal = insertDeal(idDeal, nameDeal, value, vendedor, name, phoneOrg, email, emailVendedor);
                if (!_insertDeal) {
                    return response.status(500).send({ message: "Erro ao gerar pedidos!" });
                }
            } else {
                console.log("Pedido já inserido");
            }
        }
        else {
            console.log('Oportunidade não está ganha!');
        }
    }
    return response.status(200).send({ message: "Pedidos Gerados com sucesso!" });
};