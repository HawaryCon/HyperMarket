const mongoose = require("mongoose");
const pricingSchema = new mongoose.Schema({
    color : String , 
    size : String,
    model : String,
    value : Number,
    afterSaleValue : Number
})
module.exports = mongoose.model("Pricing", pricingSchema);
//go populate this in products.