const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        // Buscar todos os DEVs em um raio de 10km
        const { latitude, longitude, tecnologias } = request.query;
        const tecnologiasArray = parseStringAsArray(tecnologias);

        const devs = await Dev.find({
            tecnologias: {
                $in: tecnologiasArray
            },
            localizacao: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        response.json({devs});
    }
};