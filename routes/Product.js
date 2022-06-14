const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController')

/* get all products */
router.get('/getProducts',ProductController.getProducts);

/* get product details by using id */
router.get('/getProduct/:id',ProductController.getProduct);

/* add product */
router.post('/addProduct',ProductController.addProduct);

/* update product details */
router.put('/updateProduct/:id',ProductController.updateProduct)

/* delete product details */
router.delete('/deleteProduct/:id',ProductController.deleteProduct);


module.exports = router