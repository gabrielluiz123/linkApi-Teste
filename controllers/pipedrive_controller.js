//controller logic

exports.get_deals = (request, response, next) => {
    response.status(200).send({
        message: "Usando Rotas"
    });
};