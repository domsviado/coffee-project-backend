const express = require('express');
const { admin, auth } = require('../../middleware/auth');
const CustomerController = require('../../controllers/CustomerController');

const router = express.Router();

router.get('/customers/detail', auth, CustomerController.getCustomer);
router.post('/customers/create', CustomerController.createCustomer);
router.post('/customers/update', auth, CustomerController.updateCustomer);

module.exports = router;
