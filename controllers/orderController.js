const Order = require('../models/orderModel');

//Create new Order
const createOrder = async (req, res) => {

    try{
        //Get Order Input
        const { customerID, customerName,  address, pNumber, orderID, orderDescription } = req.body;
        
        // Check if orderID already exists
        const existingOrder = await Order.findOne({ orderID });
        if (existingOrder) {
        return res.status(409).json({ message: 'OrderID already exists. Please Login' });
        }

        const order = await Order.create({ customerID, customerName,  address, pNumber, orderID, orderDescription });

        res.status(200).json({ order, message: 'Order created successfully' }); 
    } catch (err) {
        res.status(400).json({ message: 'Error creating Order' });
    }
};

//Get All Orders
const getOrders = async (req, res) => {

    try{
        const orders = await Order.find({}).sort({ createdAt: -1 });
        res.status(200).json({ orders });
    } catch (err) {
        res.status(400).json({ message: 'Error getting all orders' });
    }
}

module.exports = {
    createOrder,
    getOrders
}