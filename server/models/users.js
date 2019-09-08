const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);