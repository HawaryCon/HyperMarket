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
    
    product : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
        }
    ]
     

    
}, { timestamps: true });
module.exports = mongoose.model("Order", orderSchema);