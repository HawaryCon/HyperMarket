const mongoose = require("mongoose");
const oSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItems"
    }],
    orderTotal : Number
    // ,
    // number: String,
    // status: String,
    // product: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Product"
    // },
    // quantity: Number,
    // price: Number
}, { timestamps: true });
module.exports = mongoose.model("Order", oSchema);