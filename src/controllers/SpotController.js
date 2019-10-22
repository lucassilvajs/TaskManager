const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const { company, price, techs } = req.body
        const { user_id } = req.headers;

        const spot = await Spot.create({
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim()),
            user
        });
        return res.json(spot);
    },

    async index(req, res){
        const { tech } = req.query
        const spots = await Spot.find( {techs: tech} );

        return res.json(spots);
    }
}