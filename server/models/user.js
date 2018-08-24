const  mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    twitter: {
        twitterId: { type: String, required: false }, 
    },
    photo: []
});

module.exports = mongoose.model('User', UserSchema);
