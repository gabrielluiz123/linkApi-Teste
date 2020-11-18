const connMongo = require("./mongo_service");
const dealModel = require("../models/deal_model");

exports.findDeal = async function (idDeal) {
    let state = false;
    const txs = await dealModel.find({ deal_id: idDeal });
    if (txs.length > 0) {
        state = true;
        return state;
    }
    else {
        state = false;
        return state;
    }



};