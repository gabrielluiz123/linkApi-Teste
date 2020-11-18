const connMongo = require("./mongo_service");
const dealModel = require("../models/deal_model");


module.exports = {
    insertDeal: function (dealId, dealName, value, vendedor, orgName, orgPhone, email, emailVendedor) {
        var dealBag = {
            deal_id: dealId,
            deal_name: dealName,
            deal_value: value,
            vendedor: vendedor,
            email_vendedor: emailVendedor,
            organization: [
                {
                    name: orgName,
                    phone: orgPhone,
                    email: email,
                }
            ]

        };

        var dealInsert = new dealModel(dealBag);
        dealInsert.save(function (err, dealBag) {
            if (err) return console.error(err);
            console.log(dealBag.deal_name + " saved.");
        });

        return;
    }

}
