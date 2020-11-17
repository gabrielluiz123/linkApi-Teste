const axios = require('axios');

require("dotenv").config();

module.exports = async (request, response, next) => {
    try {
        const { data } = await axios.get('https://teste69.pipedrive.com/api/v1/deals?limit=500&api_token=' + process.env.API_TOKEN)
        var idDeal = data.data[0].id;
        var valueDeal = data.data[0].value;
        var addDateDeal = data.data[0].add_time;
        var closeDateDeal = data.data[0].close_time;
        var statusDeal = data.data[0].status;
        var orgName = data.data[0].org_id.name;
        var orgAddress = data.data[0].org_id.address;
        var orgEmail = data.data[0].org_id.cc_email;
        const dataPipe = {
            idDeal,
            valueDeal,
            addDateDeal,
            closeDateDeal,
            statusDeal,
            orgName,
            orgAddress,
            orgEmail
        };
        if (statusDeal == "won") {
            request = { ...request, dataPipe };
            return next();
        }
        else {
            return response.status(200).send({ message: "Oportunidade não está ganha!" });
        }
    } catch (error) {
        console.log(error);
        return response.status(500).send({ message: "Erro interno no servidor!" });
    }
};

