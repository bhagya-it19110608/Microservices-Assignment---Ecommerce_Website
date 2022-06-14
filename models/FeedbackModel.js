const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    Feedback:{
        type: String,
        required:true
    },
    contactNumber:{
        type: Number,
        required:true,
        minLength: [10, 'Add valid phone number'],
        select: false
    },
    email:{
        type: String,
        required: [true, 'Please Enter Your Email'],
        unique: true
    }
})

module.exports = mongoose.model('Feedback',FeedbackSchema)