const axios = require('axios');

require("dotenv").config();

module.exports = async (request, response, next) => {
    try {
        const { data: response } = await axios.get('https://teste69.pipedrive.com/api/v1/deals?limit=500&api_token=' + process.env.API_TOKEN)
        const dataPipe = {
            response
        };
        request.body = dataPipe;
        return next();
    } catch (error) {
        console.log(error);
        return response.status(500).send({ message: "Erro interno no servidor!" });
    }
};