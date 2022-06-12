const Order = require('../models/OrderModel')

exports.getOrders = async(req,res) =>{
    const order = await Order.find()

    if(!order){
        res.status(401).json({
            success: false,
            message: 'Reviewing order list failed'
        })
    }

    res.status(200).json({
        success: true,
        message: 'List of Orders',
        order
    })
}

exports.getOrder = async(req,res) =>{
    const order = await Order.findById(req.params.id)

    if(!order){
        res.status(401).json({
            success: false,
            message: 'Get order details failed'
        })
    }

    res.status(200).json({
        success: true,
        message: 'Order details',
        order
    })
}

exports.addOrder= async(req,res) =>{
    const order = await Order.create(req.body)

    if(!order){
        res.status(401).json({
            success: false,
            message: 'Order failed'
        })
    }

    res.status(200).json({
        success: true,
        message: 'Order placed successfully',
        order
    })
}

exports.deleteOrder = async (req,res) =>{
    const order = await Order.findByIdAndDelete(req.params.id)

    if(!order){
        res.status(401).json({
            success: false,
            message: 'Delete failed'
        })
    }

    res.status(200).json({
        success: true,
        message: 'Successfully canceled',
        order
    })
}

exports.updateOrder = async (req, res) => {

    let order = await Order.findById(req.params.id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: 'Order modifying failed'
        })
    }

    order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        message: 'Order successfully updated',
        order
    })
}
