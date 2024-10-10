const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    isFinished: {
        type: Boolean,
        default: false,
    }
})

const GameModel = mongoose.model("Game", gameSchema);
module.exports = GameModel;