const express = require('express');

const router = express.Router();

const { 
    createCustomer, getCustomers, deleteCustomer
} = require('../controllers/customerController');

//Get all 
router.get('/', getCustomers);

//Post a new
router.post('/create', createCustomer);

//Delete a new
router.delete('/:id', deleteCustomer);

module.exports = router;