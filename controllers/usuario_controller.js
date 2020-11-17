const users = require("../config/user");
const jwt = require("jsonwebtoken");
const envFile = require("../config/env");

exports.login = (request, response, next) => {
    const password = users.password;
    const user = users.user;

    if (request.body.password == password && request.body.user == user) {
        const token = jwt.sign({
            user: user,
        }, envFile.env.JWT_KEY, {
            expiresIn: "2h",

        });
        return response.status(200).send({ message: "Autorizado com sucesso!", token: token });
    }
    return response.status(401).send({ message: "Falha na autorização!" });
}