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
    const number = req.body.number; //order number
    try {
        const order = await Order.find({ number: number }).populate("product").exec();
        total = order[0]["product"][0]["price"][0];
        res.status(200).json({ total })
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}