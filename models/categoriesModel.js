const mongoose = require("mongoose");
const categoriesSchema = new mongoose.Schema({ 
    name : String , 
    icon : String , 
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
    

});
module.exports = mongoose.model("Category", categoriesSchema);