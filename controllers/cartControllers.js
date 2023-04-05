const { ObjectId } = require("bson");
const Cart = require("../models/cartModel.js");
const Pricing = require("../models/pricingModel");
exports.addToCart = async (req,res) => {
    const user = req.body.user;
    const item = req.body.product;
    const vid = req.body.vid;
    const q = req.body.q;
    const itemTag = await Pricing.find({ _id: vid });
    
    let price = (itemTag[0]["value"]) * q
    const newCart = new Cart({user : user , product : item , quantity : q , price : price});
    
    try {
        const addedToCard = await newCart.save();
        res.status(201).json({ item: addedToCard});
    }
    catch (error) {
        return res.status(420).json({message : error.message})
    }
}

exports.getCart = async (req, res) => {
    const id = req.body._id; // user id
    try {
            const cartProducts = await Cart.find({ user: id }).populate("product").exec();
            let total = 0 
            for (let i = 0; i < cartProducts.length; i++) {
                total = total + cartProducts[i]["price"]
            }
            res.status(200).json({cartItems : cartProducts , total : total  });
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


