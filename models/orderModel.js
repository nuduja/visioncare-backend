const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerID: {
        type: String,
        required: [true, 'Please enter a customerID'],
        unique: true,
    },
    customerName: {
        type: String,
        required: [true, 'Please enter a customerName'],
    },
    address: {
        type: String,
        required: [true, 'Please enter a address'],
    },
    pNumber: {
        type: String,
        required: [true, 'Please enter a pNumber'],
    },
    orderID: {
        type: String,
        required: [true, 'Please enter an Order ID'],
    },
    orderDescription: {
        type: String,
        required: [true, 'Please enter an order Description'],
    },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);