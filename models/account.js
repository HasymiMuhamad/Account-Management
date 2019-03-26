const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const accountSchema = new Schema({
    username: {
        type: String,  
        required: true,  
        max: 100, 
        lowercase: true,
        match: /^[a-zA-Z0-9]+$/, 
        index: true,
        unique: true, 
        uniqueCaseInsensitive: true
        // min: 1,
        // max: 100   
    },

    password: {
        type: String, 
        required: true
        // min: 3, 
        // max: 100 
    },

    email: { 
        type: String, 
        lowercase: true, 
        required: true, 
        match: /\S+@\S+\.\S+/, 
        index: true,
        unique: true
        // min: 1, 
        // max: 100

    }
})

accountSchema.pre('save',function (next) {
    this.username = this.username.toLowerCase();
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
})

accountSchema.plugin(uniqueValidator)


module.exports = mongoose.model('Account', accountSchema);

