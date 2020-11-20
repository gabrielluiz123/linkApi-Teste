const dealModel = require("../models/deal_model");

module.exports = function (dealId, dealName, value, vendedor, orgName, orgPhone, email, emailVendedor) {
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
    //Insere o deal no MongoDB
    dealInsert.save(function (err, dealBag) {
        if (err) return false;
        console.log(dealBag.deal_name + " saved.");
    });
    return true;
}
