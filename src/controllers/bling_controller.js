require("dotenv").config();
const axios = require("axios");
var parseString = require('xml2js').parseString;

module.exports = async (request, response, next) => {
    var addressSplit = request.dataPipe.orgAddress.split(',');
    var name = request.dataPipe.orgName;
    var typePeople = 'J';
    var address = addressSplit[1];
    var cpfCnpj = '';
    var ie = '';
    var number = addressSplit[5];
    var comp = addressSplit[4];
    var neigh = addressSplit[3];
    var city = addressSplit[1].split('-')[0];
    var cep = addressSplit[2];
    var uf = addressSplit[1].split('-')[1];
    var phone = request.dataPipe.phoneOrg;
    var email = request.dataPipe.email;
    var value = request.dataPipe.valueDeal;
    var nameDeal = request.dataPipe.nameDeal;
    var xmlString = `<?xml version="1.0" encoding="UTF-8"?>
    < pedido >
 <cliente>
 <nome>${name}</nome>
 <tipoPessoa>${typePeople}</tipoPessoa>
 <endereco>${address}</endereco>
 <cpf_cnpj>${cpfCnpj}</cpf_cnpj>
 <ie>${ie}</ie>
 <numero>${number}</numero>
 <complemento>${comp}</complemento>
 <bairro>${neigh}</bairro>
 <cep>${cep}</cep>
 <cidade>${city}</cidade>
 <uf>${uf}</uf>
 <fone>${phone}</fone>
 <email>${email}</email>
 </cliente>
 <transporte>
 <transportadora>Transportadora XYZ</transportadora>
 <tipo_frete>R</tipo_frete>
 <servico_correios>SEDEX - CONTRATO</servico_correios>
 <dados_etiqueta>
 <nome>Endereço de entrega</nome>
 <endereco>Rua Visconde de São Gabriel</endereco>
 <numero>392</numero>
 <complemento>Sala 59</complemento>
 <municipio>Bento Gonçalves</municipio>
 <uf>RS</uf>
 <cep>95.700-000</cep>
 <bairro>Cidade Alta</bairro>
 </dados_etiqueta>
 <volumes>
 <volume>
 <servico>SEDEX - CONTRATO</servico>
 <codigoRastreamento></codigoRastreamento>
 </volume>
 <volume>
 <servico>PAC - CONTRATO</servico>
 <codigoRastreamento></codigoRastreamento>
 </volume>
 </volumes>
 </transporte>
 <itens>
 <item>
 <codigo>001</codigo>
 <descricao>${nameDeal}</descricao>
 <un>Pç</un>
 <qtde>1</qtde>
 <vlr_unit>${value}</vlr_unit>
 </item>
 </itens>
 <parcelas>
 <parcela>
 <data>01/09/2009</data>
 <vlr>100</vlr>
 <obs>Teste obs 1</obs>
 </parcela>
 <parcela>
 <data>06/09/2009</data>
 <vlr>50</vlr>
 <obs></obs>
 </parcela>
 <parcela>
 <data>11/09/2009</data>
 <vlr>50</vlr>
 <obs>Teste obs 3</obs>
 </parcela>
 </parcelas>
 <vlr_frete>15</vlr_frete>
 <vlr_desconto>10</vlr_desconto>
 <obs>Testando o campo observações do pedido</obs>
 <obs_internas>Testando o campo observações internas do pedido</obs_internas>
</pedido > `;
    var xml = '';
    parseString(xmlString, function (err, result) {
        xml = result;
    });
    var post = {
        apikey: process.env.API_KEY_BLING,
        xml: xml
    };


    const resp = await axios.post('https://bling.com.br/Api/v2/pedido/json/', post)
    return response.status(200).send({ data: resp });

};