const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    number : {
        type: String,
        unique : true
    } ,
    status : String , 
    
    products :[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
        }
    ] 
,
    total : Number 
    
}, { timestamps: true });
module.exports = mongoose.model("Order", orderSchema);