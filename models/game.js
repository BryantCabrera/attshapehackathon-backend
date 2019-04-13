const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: String,
    pool: Number,
    status: String,
    gamblers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

const gameSchema = new mongoose.Schema({
    game: { type: String, default: 'Game' },
    totalBets: { type: Number, required: true, default: 0 },
    teamA: [teamSchema],
    teamB: [teamSchema],
    gamblers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;