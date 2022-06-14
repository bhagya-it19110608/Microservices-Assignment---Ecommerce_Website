const Product = require('../models/ProductModel')

/* get all products ( GET )*/
exports.getProducts = async(req,res) =>{
    const prod = await Product.find()

    if(!prod){
        res.status(401).json({
            success: false,
            message: 'get all product details unsuccessful'
        })
    }

    res.status(200).json({
        success: true,
        prod
    })
}

/* get product By Id ( GET )*/
exports.getProduct = async(req,res) =>{
    const prod = await Product.findById(req.params.id)

    if(!prod){
        res.status(401).json({
            success: false,
            message: 'get product unsuccessful'
        })
    }

    res.status(200).json({
        success: true,
        prod
    })
}

/*add product ( POST ) */
exports.addProduct= async(req,res) =>{
    const prod = await Product.create(req.body)

    if(!prod){
        res.status(401).json({
            success: false,
            message: 'Insert Product Unsuccesfull'
        })
    }

    res.status(200).json({
        success: true,
        message: 'product inserted successfully',
        prod

    })
}

/* delete product ( DELETE ) */
exports.deleteProduct = async (req,res) =>{
    const prod = await Product.findByIdAndDelete(req.params.id)

    if(!prod){
        res.status(401).json({
            success: false,
            message: 'delete product unsuccessful'
        })
    }

    res.status(200).json({
        success: true,
        prod
    })
}

/* update product ( PUT ) */
exports.updateProduct = async (req, res) => {

    let prod = await Product.findById(req.params.id);

    if (!prod) {
        return res.status(404).json({
            success: false,
            message: 'Product Not Found'
        })
    }

    prod = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        prod
    })
}
