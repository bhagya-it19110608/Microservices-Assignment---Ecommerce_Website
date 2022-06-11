const Customer = require('../models/CustomerModel')

//add Employee
exports.addCustomer= async(req,res) =>{
    const cus = await Customer.create(req.body)

    if(!cus){
        res.status(401).json({
            success: false,
            message: 'Insert Error'
        })
    }

    res.status(200).json({
        success: true,
        cus
    })
}

//get employees
exports.getCustomer = async(req,res) =>{
    const cus = await Customer.find()

    if(!cus){
        res.status(401).json({
            success: false,
            message: 'get customer failed'
        })
    }

    res.status(200).json({
        success: true,
        cus
    })
}

//get Customer By Id
exports.getCustomerById = async(req,res) =>{
    const cus = await Customer.findById(req.params.id)

    if(!cus){
        res.status(401).json({
            success: false,
            message: 'get Customer was failed'
        })
    }

    res.status(200).json({
        success: true,
        cus
    })
}

exports.deleteCustomer = async (req,res) =>{
    const cus = await Customer.findByIdAndDelete(req.params.id)

    if(!cus){
        res.status(401).json({
            success: false,
            message: 'delete Customer was failed'
        })
    }

    res.status(200).json({
        success: true,
        cus
    })
}

exports.updateCustomer = async (req, res) => {

    let cus = await Customer.findById(req.params.id);


    if (!cus) {
        return res.status(404).json({
            success: false,
            message: 'Customer Not Found'
        })
    }

    cus = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        cus
    })
}

//test comment