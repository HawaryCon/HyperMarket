const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    number : String,
    status : String , 
    product : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:Number,
    price : Number
    }, { timestamps: true });
module.exports = mongoose.model("OrderItems", orderSchema);