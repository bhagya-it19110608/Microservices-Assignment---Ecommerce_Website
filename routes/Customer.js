const express = require('express');
const router = express.Router();

const { addCustomer, getCustomer, getCustomerById, deleteCustomer, updateCustomer } = require('../controllers/CustomerController');

//Register User
router.route('/addcustomer').post(addCustomer);
router.route('/getcustomer').get(getCustomer);
router.route('/getcustomerbyid/:id').get(getCustomerById);
router.route('/deletecustomer/:id').delete(deleteCustomer);
router.route('/updatecustomer/:id').post(updateCustomer)


module.exports = router