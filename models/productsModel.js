const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    pname: String,
    image: String, //string for now
    desc: String,
    price: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pricing"
    }] ,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand"
    }
    //brand-id from brand 
    //rate from rating model
});
module.exports = mongoose.model("Product" , productSchema);