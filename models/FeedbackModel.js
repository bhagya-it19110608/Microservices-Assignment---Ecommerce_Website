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
    }
})

module.exports = mongoose.model('Feedback',FeedbackSchema)