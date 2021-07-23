const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    year: Number,
    price:{
        type: Number,
        min: 3,
        min: 7,
        default: 1
    },
    minPlayer:{
        type: Number,
        min: 1,
        min: 10,
    },
    maxPlayer:{
        type: Number,
        min: 1,
        min: 10,
    },
    minAge: Number,
    designers:[String],
    // publisher: publisherSchema   
});

module.exports = Game = mongoose.model('games',gameSchema);

 mongoose.model("Game", gameSchema);