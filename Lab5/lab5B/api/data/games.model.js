const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schemas

const publisherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
            type: String,
    }
});

const gameSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    year: Number,
    price:{
        type: Number,
        min: 1,
        min: 5,
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
    publisher: publisherSchema   
});

module.exports = Game = mongoose.model('games',gameSchema);

// mongoose.model("Game", gameSchema);