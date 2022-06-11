const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    NIC:{
        type: String,
        required:true
    },
    contactNumber:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required: [true, 'Please Enter Your Email'],
        unique: true,
        
    },
    password:{
        type: String,
        required: [true, 'Please Enter Password'],
        minLength: [6, 'Your Password must be longer than 6 characters'],
        select: false
    },
    Address:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Customer',customerSchema)