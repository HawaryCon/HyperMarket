const Order = require("../models/orderModel");

exports.createOrder = async (req, res) => {
    const orderData = req.body;
    
    const newOrder = new Order(orderData);
    try {
        const nOrder = await newOrder.save();
        res.status(201).json(nOrder);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
    }
exports.getOrder = async (req, res) => {
    const id = req.body._id; // user id
    try {
        const order = await Order.findById(id);
        res.status(200).json(order)
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}