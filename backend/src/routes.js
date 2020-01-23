const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Definindo as rotas da API
routes.post("/devs", DevController.store);
routes.get("/devs", DevController.index);

routes.get("/search", SearchController.index);

// Exportando as rotas que foram definidas
module.exports = routes;