const connMongo = require("./mongo_service");
const dealModel = require("../models/deal_model");

exports.findDeal = async function (idDeal) {
    let state = false;
    try {
        const deals = await dealModel.find({ deal_id: idDeal });
        if (deals.length > 0) {
            state = true;
            return state;
        }
        else {
            state = false;
            return state;
        }
    } catch (error) {
        console.log(error);
        return error;
    }

};