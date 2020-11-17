const axios = require('axios');

require("dotenv").config();

module.exports = async (request, response, next) => {
    try {
        const { data } = await axios.get('https://teste69.pipedrive.com/api/v1/deals?limit=500&api_token=' + process.env.API_TOKEN)
        var lenght = data.data.lenght;
        for (var i = 0; i < lenght; i++) {
            var idDeal = data.data[i].id;
            var valueDeal = data.data[i].value;
            var addDateDeal = data.data[i].add_time;
            var closeDateDeal = data.data[i].close_time;
            var statusDeal = data.data[i].status;
            var orgName = data.data[i].org_id.name;
            var orgAddress = data.data[i].org_id.address;
            var orgEmail = data.data[i].org_id.cc_email;
            var nameDeal = data.data[i].title;
            var ownerName = data.data[i].owner_name;
            var phoneOrg = data.data[i].person_id.phone.value;
            const dataPipe = {
                idDeal,
                valueDeal,
                addDateDeal,
                closeDateDeal,
                statusDeal,
                orgName,
                orgAddress,
                orgEmail,
                nameDeal,
                ownerName,
                phoneOrg,
            };
            if (statusDeal == "won") {
                request = { ...request, dataPipe };
                return next();
            }
            else {
                console.log('Oportunidade não está ganha!');
            }
        }

    } catch (error) {
        console.log(error);
        return response.status(500).send({ message: "Erro interno no servidor!" });
    }
};

