const dealModel = require("../models/deal_model");

require("dotenv").config();

module.exports = async (request, response, next) => {
    try {
        const deals = await dealModel.find({});
        return response.status(200).send({ datas: deals });
    } catch (error) {
        console.log(error);
        return response.status(500).send({ message: "Erro ao recuperar dados!" });
    }
};

