const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController')

/* get all customers */
router.get('/getcustomers',CustomerController.getCustomers);

/* get customer details by using id */
router.get('/getcustomer/:id',CustomerController.getCustomer);

/* add customer */
router.post('/addcustomer',CustomerController.addCustomer);

/* update customer details */
router.put('/updatecustomer/:id',CustomerController.updateCustomer)

/* delete customer details */
router.delete('/deletecustomer/:id',CustomerController.deleteCustomer);


module.exports = router