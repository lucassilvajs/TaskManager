const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    title: String,
    description: String,
    userFrom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    userTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    dateStart: Date,
    dateFinish: Date,
    score: Number
});

module.exports = mongoose.model('Tasks', TasksSchema);