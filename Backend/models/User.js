const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type: String, required: true, minlength: 3, maxlength: 100},
    password: {type: String, required: true, minlength: 6, maxlength: 200},
})

module.exports = mongoose.model('User', userSchema)