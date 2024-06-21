const mongoose = require('mongoose')


const empc = mongoose.model('empCRUD',

    {
        uname: String,
        email: String,
        city: String
    }
)
module.exports = empc

