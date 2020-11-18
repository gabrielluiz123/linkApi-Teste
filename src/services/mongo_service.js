const mongoose = require('mongoose');

const uri = "mongodb+srv://gabriel123:linkapi123@cluster0.owdsx.mongodb.net/linkApi?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB Connected…");
    })
    .catch(err => console.log(err))

module.exports = mongoose.connection;