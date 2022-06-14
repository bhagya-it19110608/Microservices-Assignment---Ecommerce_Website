const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')

router.get('/getorders',OrderController.getOrders);

router.get('/getorder/:id',OrderController.getOrder);

router.post('/addorder',OrderController.addOrder);

router.put('/updateorder/:id',OrderController.updateOrder)

router.delete('/deleteorder/:id',OrderController.deleteOrder);

module.exports = router