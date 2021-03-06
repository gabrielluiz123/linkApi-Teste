# Kapivara's API

API desenvolvida em nodejs para o desafio técnico da empresa LinkAPI, tem por finalidade a integração entre as plataformas pipedrive e bling, inserindo as oportunidades marcadas como ganha no pipedrive como pedido dentro do bling. Os pedidos gerados no bling são salvos no banco de dados mongo Atlas e podem ser recuperados em um endpoint.

## Quick start

Clone o repositório na sua máquina, utilizando git clone https://github.com/gabrielluiz123/linkApi-Teste.git .
Acesse a pasta clonada do aplicativo.

## Environment variable

Preencher os dados do .env.example em um arquivo .env

    JWT_KEY=jwt_key
    user=usuario_do_jwt
    password=senha_do_jwt
    API_TOKEN=token_da_api
    API_KEY_BLING=api_key_bling
    MONGO_URL=url_do_mongo
    URL_PIPE=url_pipe

## Install modules

    npm install

## Run the app

    npm start

# REST API

A porta utilizada pela API está como padrão na 3000

## Integration Route

### Request

Primeiro deve-se efetuar o login no sistema e receber o token do JWT enviando um POST pela rota, o JWT tem 2 horas de prazo de validade

`POST /login`


### Response

    {
        "message": "Autorizado com sucesso!",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                         eyJ1c2VyIjoiZ2FicmllbCIsImlhdCI6MTYwNTgzMzM1MywiZXhwIjoxNjA1ODQwNTUzfQ.Dm2p8E7or08TYjrFFDZGxPMA_oDdluwWjXPQtPMJjco"
    }

### Request

Após o login ser efetuado com sucesso, deve-se enviar a requisição GET com o JWT no como Bearer Token no Authorization do header da requisição para a integração ser efetuada!

`GET /linkApi`


### Response

    {
        "message": "Pedidos Gerados com sucesso!"
    }

Todos os deals do pipedrive serão enviados como pedido para o bling e os dados serão salvos no banco MongoDB Atlas

## Get Deals Route

### Request

Para recuperar todos os deals inseridos no bling que foram salvos no MongoDB Atlas, enviar uma requisição GET com o JWT recuperado no ato do login no como Bearer Token no Authorization do header da requisição para a integração ser efetuada!.

`GET /getdeals`


### Response

    {
    "datas": [
        {
            "_id": "5fb6cffa46d03916440e0644",
            "deal_id": "1",
            "deal_name": "Negócio Teste",
            "deal_value": "234",
            "vendedor": "Gabriel Santos",
            "email_vendedor": "gabriells760@gmail.com",
            "organization": [
                {
                    "_id": "5fb6cffa46d03916440e0645",
                    "name": "Teste",
                    "email": "teste69@pipedrivemail.com"
                }
            ],
            "__v": 0
        },
    ]
    }

# Heroku

O deploy da aplicação foi feito no heroku, segue o link

    https://pacific-castle-88613.herokuapp.com

## Login Get

## Request

`POST /login`

    https://pacific-castle-88613.herokuapp.com/login

    body: 
    {
        "user":"user",
        "password": "user"
    }

## Integration Route

Inserir o jwt no header do request como Authorization Bearer 

`GET /linkApi`

    https://pacific-castle-88613.herokuapp.com/linkapi


## Get Deals Route

Inserir o jwt no header do request como Authorization Bearer 

`GET /getdeals`

    https://pacific-castle-88613.herokuapp.com/getdeals