const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String ,
    address : String , 
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }

    },
    cart : {
        type :mongoose.Schema.Types.ObjectId,
        ref : "Cart"
    },
    image: String ,
    token: String ,

    // social login id -if i did it-
    //favorite id
});

module.exports = mongoose.model("User", userSchema);