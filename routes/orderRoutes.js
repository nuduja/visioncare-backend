const express = require('express');

const router = express.Router();

const { 
    createOrder, getOrders
} = require('../controllers/orderController');

//Get all 
router.get('/', getOrders);

//Post a new
router.post('/create', createOrder);

module.exports = router;