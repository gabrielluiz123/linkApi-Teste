const axios = require('axios');

require("dotenv").config();

module.exports = async (request, response, next) => {
    try {
        //Envia um get para a API do pipe requisitando os dados dos deals
        const { data: response } = await axios.get(process.env.URL_PIPE + '' + process.env.API_TOKEN)
        const dataPipe = {
            response
        };
        //Envia os dados dos deals do pipe no body da requisição para a próxima rota
        request.body = dataPipe;
        return next();
    } catch (error) {
        console.log(error);
        return response.status(500).send({ message: "Erro interno no servidor!" });
    }
};