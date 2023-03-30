const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema({
    name : String,
    image : String,
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
});
module.exports = mongoose.model("Brand", brandSchema);