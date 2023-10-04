const Customer = require('../models/customerModel');

//Create new Customer
const createCustomer = async (req, res) => {

    try{
        //Get Customer Input
        const { customerID, customerName,  address, pNumber, birthDate, gender, nic, orders, channelling, surgery } = req.body;
        
        // Check if customerID already exists
        const existingCustomer = await Customer.findOne({ customerID });
        if (existingCustomer) {
        return res.status(409).json({ message: 'CustomerID already exists. Please Login' });
        }

        const customer = await Customer.create({ customerID, customerName,  address, pNumber, birthDate, gender, nic, orders, channelling, surgery });

        res.status(200).json({ customer, message: 'Customer created successfully' }); 
    } catch (err) {
        res.status(400).json({ message: 'Error creating user' });
    }
};

//Get All Customers
const getCustomers = async (req, res) => {

    try{
        const customers = await Customer.find({}).sort({ createdAt: -1 });
        res.status(200).json({ customers });
    } catch (err) {
        res.status(400).json({ message: 'Error getting all customers' });
    }
}

//Delete Customer
const deleteCustomer = async (req, res) => {

    try{
        const { id } = req.params;
        const customer = await Customer.findOneAndDelete({ _id: id });
        res.status(200).json({ customer });
    } catch (err) {
        res.status(400).json({ message: 'Error, No such Customer, Delete Customer Unsuccessful' });
    }
}

module.exports = {
    createCustomer,
    getCustomers,
    deleteCustomer
}