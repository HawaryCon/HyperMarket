const mongoose = require("mongoose");
const favSchema = new mongoose.Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    ,
    product:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
    

});
module.exports = mongoose.model("Fav", favSchema);