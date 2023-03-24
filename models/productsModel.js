const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    pname: String,
    image: String, //string for now
    desc: String,
    price: Number, //for now it will be number
    //brand-id from brand 
    //rate from rating model
});
module.exports = mongoose.model("Product" , productSchema);