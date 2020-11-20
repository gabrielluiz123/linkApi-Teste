const mongoose = require('mongoose');
require("dotenv").config();

const uri = process.env.MONGO_URL;
//Conexão ao banco
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB Connected…");
    })
    .catch(err => console.log(err))

module.exports = mongoose.connection;