const OrderItems = require("../models/orderItemsModel");
const Order = require("../models/orderModel");
const { v4: uuidv4 } = require('uuid');

exports.createOrder = async (req, res) => {
    // const orderData = req.body;
    const user = req.body.user
    const cartItems = req.body.cartItems
    //payment
    const orderNumber = uuidv4();
   
    // let orderNumber = newO["_id"]
    let items=[];
    let orderTotalValue = 0;
    
    
    try {
        for (let i = 0; i< cartItems.length; i++) {
            
            let newOrder = new OrderItems({
                user: user ,
                number: orderNumber ,
                status : "pendig",
                product : cartItems[i]["product"]["_id"],
                quantity: cartItems[i]["quantity"],
                price : cartItems[i]["price"]
            });
            let nOrder = await newOrder.save();
            items.push(nOrder["_id"])
            orderTotalValue = orderTotalValue + cartItems[i]["price"];
            
        }
        const o = new Order({user : user , items : items , orderTotal : orderTotalValue});
        let newO = await o.save();
        res.status(201).json({ message: "order was added successfuly", order: orderNumber, items: items, createdOrder: newO });
        // res.status(201).json({neworder :newO , orderID : oid});
        
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
    }
exports.getOrder = async (req, res) => {
    const number = req.body.number; //order number
    try {
        const order = await OrderItems.find({ number: number }).populate("product").exec();
        let total = 0;
        for (let i = 0; i < order.length; i++) {
            total = total + order[i]["price"];
        }
        res.status(200).json({ order : order , total : total })
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}
exports.getOrders = async (req, res) => {
    
    const user = req.body.user; // user id
    try {
        const orders = await Order.find({ user: user }).populate("items").exec();
        res.status(200).json({orders : orders })
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}