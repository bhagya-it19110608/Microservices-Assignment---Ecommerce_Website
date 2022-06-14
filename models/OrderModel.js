const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    item:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    quantity:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('Order',orderSchema)