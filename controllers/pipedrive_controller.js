exports.get_deals = (request, response, next) => {

    const deal = {
        data: request.body.date,
        valor: request.body.value,
        id: request.body.id,
    };

    response.status(200).send({
        mensagem: "Usando post Rotas 3",
        getDeal: deal,
    })
};