const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
 user : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
  ,
 product : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    } 
    // ,
    // price: {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "Pricing"
    // }
    ,
    quantity : Number,
    price : Number
    
});
module.exports = mongoose.model("Cart", cartSchema);

// let cart = await Cart.findOne().populate("products")

// let sum = 0
// for (let i = 0; i < cart.products.length; i++) {
//     const product = cart.products[i];
//     sum += product.price
// }

// cart.sum = sum

// return cart

/**
 * cart:{
 * user_id:qwer,
 * products:[
 * {},{},
 * sum:120
 * ]
 * }
 */