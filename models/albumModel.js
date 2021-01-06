const mongoose = require('mongoose');
const User = require('../models/userModel')

const albumSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    user : { 
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
      }
})

const Album = new mongoose.model('Album' , albumSchema);
module.exports = Album;