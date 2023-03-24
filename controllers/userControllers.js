const { ObjectId } = require("bson");
const User = require("../models/userModel.js");



exports.createUser = async (req , res) => {

   
    const uData = req.body;
    const newU = new User(uData);

    try { 
        const savedUser = await newU.save();
        res.status(201).json(savedUser);


    }
    catch(error) {
        return res.status(420).json({message : error.message})
    }
}
exports.getUser = async (req , res) => {
    
    const id = req.body._id;
    try {
        const user = await User.findById(id); 
        res.status(200).json(user);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }

}

exports.updateUser = async (req , res) => {
    try {
    const id = req.body._id;
    const { name ,address, location ,image } = req.body;
    let updatedUser = await User.findByIdAndUpdate(new ObjectId(id) , { name, address, location, image} )
    res.status(200).json(updatedUser);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }

}



