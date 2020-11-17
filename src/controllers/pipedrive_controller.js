//controller logic
const axios = require('axios');
const blingController = require('./bling_controller');

require("dotenv").config();

exports.get_deals = (request, response, next) => {

    axios.get('https://teste69.pipedrive.com/api/v1/deals?limit=500&api_token=' + process.env.API_TOKEN)
        .then(function ({ data }) {
            var idDeal = data.data[0].id;
            var valueDeal = data.data[0].value;
            var addDateDeal = data.data[0].add_time;
            var closeDateDeal = data.data[0].close_time;
            var statusDeal = data.data[0].status;
            var orgName = data.data[0].org_id.name;
            var orgAddress = data.data[0].org_id.address;
            var orgEmail = data.data[0].org_id.cc_email;
            if (statusDeal == "won") {
                return response.status(200).send({ id: idDeal, value: valueDeal, add_date: addDateDeal, close_date: closeDateDeal, status: statusDeal });
            }
            else {
                return response.status(200).send({ message: "Oportunidade não está ganha!" });
            }

        });
};

