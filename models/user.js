const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, default: 'Creator' },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String, default: 'https://i.imgur.com/KbicDVh.jpg' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;