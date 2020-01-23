# Visão geral
A API do backend é um recurso Node.JS-based para comunicar com o AlertaDev. Você pode utilizar para definir certas propriedades para usuários.  
O Backend foi desenvolvido pensando no conceito DRY (Don't Repeat Yourself) e na arquitetura MVC.

# Models: Devs
Este é o Modelo de Usuários (No caso da Omnistack, os Devs).  

## Estrutura
```js
{
  "techs": [ 
      "<Tecnologias>" 
  ],
  "_id": "<ID Aleatório>",
  "github_username": "<User do GitHub>",
  "name": "<Nome do usuário>",
  "avatar_url": "<GitHub Avatar URL>",
  "bio": "<Descrição>",
  "location": {
    "coordinates": [
      <Longitude>,
      <Latitude>
    ],
    "_id": "<ID Aleatório>",
    "type": "Point"
  },
  "__v": <Qnt. de updates>
}
```
# Controllers
Aqui estão listados os controles da API do AlertaDev, seus métodos, parâmetros e estrutura.

## Devs
Os Devs são os usuários do programa.

| Método       | Estrutura           | Ação                                  | Parâmetros          | Retorno       |
| ------------ | ------------------- | ------------------------------------- | ------------------- | ------------- |
|   GET        | `/api/devs`         | Lista todos os usuários cadastrados   | **Nenhum**          | JSON/Usuários |
|   POST       | `/api/devs`         | Cadastra um usuário no banco de dados | JSON/git,techs,geo  | JSON/Usuário  |

## Search
Este controlador serve para listar usuários, porém em modo de pesquisa.  
Com este módulo é possível procurar por usuários em um raio de **50Km** e com techs específicas.

| Método       | Estrutura     | Ação              | Parâmetros                     | Retorno       |
| ------------ | ------------- | ----------------- | ------------------------------ | ------------- |
|    GET       | `/api/search` | Pesquisa usuários | Query/techs,latitude,longitude | JSON/Usuários |
