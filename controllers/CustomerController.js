const Customer = require('../models/CustomerModel')

/* get all Customers ( GET ) */
exports.getCustomers = async (req, res) => {
  const cus = await Customer.find()

  if (!cus) {
    res.status(401).json({
      success: false,
      message: 'get all customers details unsuccessful'
    })
  }

  res.status(200).json({
    success: true,
    cus
  })
}

/* get Customer By Id ( GET ) */
exports.getCustomer = async (req, res) => {
  const cus = await Customer.findById(req.params.id)

  if (!cus) {
    res.status(401).json({
      success: false,
      message: 'get Customer unsuccessful'
    })
  }

  res.status(200).json({
    success: true,
    cus
  })
}

/* add customer ( POST ) */
exports.addCustomer = async (req, res) => {
  const cus = await Customer.create(req.body)

  if (!cus) {
    res.status(401).json({
      success: false,
      message: 'Insert Customer Unsuccesfull'
    })
  }

  res.status(200).json({
    success: true,
    message: 'Customer inserted successfully',
    cus
  })
}

/* delete customer ( DELETE ) */
exports.deleteCustomer = async (req, res) => {
  const cus = await Customer.findByIdAndDelete(req.params.id)

  if (!cus) {
    res.status(401).json({
      success: false,
      message: 'delete Customer unsuccessful'
    })
  }

  res.status(200).json({
    success: true,
    cus
  })
}

/* update customer ( PUT ) */
exports.updateCustomer = async (req, res) => {
  let cus = await Customer.findById(req.params.id)

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
  })

  res.status(200).json({
    success: true,
    cus
  })
}
