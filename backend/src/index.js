const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Fazendo conexão com o banco de dados
mongoose.connect("mongodb+srv://omnistack:omnistack@pessoal-4bwpv.mongodb.net/devradar?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

// Definindo o formato das requisições como JSON
app.use(express.json())

// Aplicando todas as rotas da API
app.use(routes);

// Definindo a porta que a API ficará
app.listen(3333);