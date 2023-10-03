const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
    token: { 
        type: String 
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);