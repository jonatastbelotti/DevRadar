const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        response.json(devs);
    },

    async store(request, response) {
        const { github_username, tecnologias, latitude, longitude } = request.body;

        let dev = await Dev.findOne({github_username});
        if (!dev) {
            const resp_github = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio} = resp_github.data;

            dev = await Dev.create({
                nome: name,
                github_username,
                biografia: bio,
                avatar_url,
                tecnologias: parseStringAsArray(tecnologias),
                localizacao: {
                    type: "Point",
                    coordinates: [longitude, latitude]
                }
            });
        }

        response.json(dev);
    }
};