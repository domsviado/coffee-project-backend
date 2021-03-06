const express = require('express');
const { admin, auth } = require('../../middleware/auth');
const CustomerController = require('../../controllers/CustomerController');
const ProductController = require('../../controllers/ProductController');
const OrderController = require('../../controllers/OrderController');
const AdminController = require('../../controllers/AdminController');

const router = express.Router();

router.get('/customers/detail', auth, CustomerController.getCustomer);
router.post('/customers/create', CustomerController.createCustomer);
router.post('/customers/update', auth, CustomerController.updateCustomer);

router.get('/products', auth, ProductController.getAllProducts);
router.get('/products/:id', auth, ProductController.getAllProductDetail);
router.post('/products/create', admin, ProductController.createProduct);

router.post('/orders/create', auth, OrderController.createOrder);
router.post('/orders/update', auth, OrderController.updateOrder);

router.post('/admin/create', AdminController.createAdmin);

module.exports = router;
