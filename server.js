const http = require("http");
const app = require("./src/app");
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const mongoose = require('mongoose');
require("dotenv").config();

const uri = "mongodb+srv://gabriel123:linkapi123@cluster0.owdsx.mongodb.net/linkApi?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB Connected…");
    })
    .catch(err => console.log(err))

server.listen(port);