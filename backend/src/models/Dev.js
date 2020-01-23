const mongose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongose.Schema({
    nome: String,
    github_username: String,
    biografia: String,
    avatar_url: String,
    tecnologias: [String],
    localizacao: {
        type: PointSchema,
        index: '2dsphere'
    }
});

// Exportando modelo de dados para Dev
module.exports = mongose.model("Dev", DevSchema);