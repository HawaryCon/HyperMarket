const { ObjectId } = require("bson");
const Cart = require("../models/cartModel.js");
exports.addToCart = async (req,res) => {
    const cartData = req.body;
    const newCart = new Cart(cartData);
    try {
        const addedToCard = await newCart.save();
        res.status(201).json(addedToCard);
    }
    catch (error) {
        return res.status(420).json({message : error.message})
    }


    // const addedProduct = Cart.findById(id).populate("products")
    
}

exports.getCart = async (req, res) => {
     const id = req.body._id; // user id
    try {
        
        const cartProducts = await Cart.find({ user: id }).populate("products").exec();
        
        const total = cartProducts.reduce((total, cartItem) => {
            return total + (cartItem["products"]["price"]);
        }, 0)
        // await Cart.findById(id).populate("products user");
        res.status(200).json({cartProducts : cartProducts , total : total});
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}

exports.deleteCartItem = async (req, res) => {
    try {
        const id = req.body._id;
        const result = await Cart.deleteOne(new ObjectId(id))
        res.status(!!result.deletedCount ? 200 : 400).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}


