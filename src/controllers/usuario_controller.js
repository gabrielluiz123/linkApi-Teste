const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = (request, response, next) => {
    const password = process.env.password;
    const user = process.env.user;

    if (request.body.password == password && request.body.user == user) {
        //Se o usuário e a senha corresponderem aos cadastrados, é criado o jwt
        const token = jwt.sign({
            user: user,
        }, process.env.JWT_KEY, {
            expiresIn: "2h",

        });

        return response.status(200).send({ message: "Autorizado com sucesso!", token: token });
    }

    return response.status(401).send({ message: "Falha na autorização!" });
}