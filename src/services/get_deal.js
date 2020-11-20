require("dotenv").config();

const dealModel = require("../models/deal_model");

module.exports = async (request, response, next) => {
    try {
        //Recupera todos os deals inseridos na collection de Deals
        const deals = await dealModel.find({});
        return response.status(200).send({ datas: deals });
    } catch (error) {
        console.log(error);
        return response.status(500).send({ message: "Erro ao recuperar dados!" });
    }
};