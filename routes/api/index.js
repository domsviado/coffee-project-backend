const express = require('express');
const { admin, auth } = require('../../middleware/auth');
const CustomerController = require('../../controllers/CustomerController');
const ProductController = require('../../controllers/ProductController');

const router = express.Router();

router.get('/customers/detail', auth, CustomerController.getCustomer);
router.post('/customers/create', CustomerController.createCustomer);
router.post('/customers/update', auth, CustomerController.updateCustomer);

router.get('/products', auth, ProductController.getAllProducts);
router.post('/products/create', admin, ProductController.createProduct);

module.exports = router;
