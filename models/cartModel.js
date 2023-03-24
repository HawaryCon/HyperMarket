const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
 user : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
  ,
 products : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    } ,
    quantity : Number ,
    
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