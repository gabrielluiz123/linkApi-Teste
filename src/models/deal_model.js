const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    deal_id: {
        type: String,
        required: true
    },
    deal_name: {
        type: String,
        required: true
    },
    deal_value: {
        type: String,
        required: true
    },
    vendedor: {
        type: String,
        required: true
    },
    email_vendedor: {
        type: String,
        required: true
    },
    organization: [
        {
            name: {
                type: String
            },
            phone: {
                type: String
            },
            email: {
                type: String
            },
        }
    ]
});

module.exports = mongoose.model('Deal', schema);