const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 8, maxlength: 100 },
    email: { type: String, required: true, minlength: 6, maxlength: 200 },
    phone: { type: String, required: true, minlength: 9, maxlength: 200 },
    adress: { type: String, required: true, minlength: 6, maxlength: 200 },
    cpf: { type: String, required: true, minlength: 11, maxlength: 15 },
})

module.exports = mongoose.model('Client', clientSchema)