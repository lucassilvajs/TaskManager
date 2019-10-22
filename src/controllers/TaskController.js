const Task = require('../models/Task');
module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { title, description, userFrom, project } = req.body;

        
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        });

        await booking.populate('spot').populate('user').execPopulate(); 
        return res.json(booking)
    }
}