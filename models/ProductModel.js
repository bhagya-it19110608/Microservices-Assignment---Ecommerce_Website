const mongoose = require('mongoose');

const productSchema = mongoose.Schema({



    productcode:{
        type: String,
        required:[true ,'Please Enter category'],
        unique:true
    },

    productcategory:{
        type: String,
        required:true
    },

    productName:{
        type: String,
        required:true
    },

    productPrice:{
        type: String,
        required:true
    },

    productdescription:{
        type: String,
        required:true
        
        
    },
    
   
})

module.exports = mongoose.model('Product',productSchema)