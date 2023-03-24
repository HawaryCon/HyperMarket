const { ObjectId } = require("bson");
const Fav = require("../models/favouriteModel.js");
exports.addToFav = async (req, res) => {
    const favData = req.body;
    const newFav = new Fav(favData);
    try {
        const addToFav = await newFav.save();
        res.status(201).json(addToFav);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}

exports.getFav = async (req, res) => {
    const id = req.body._id; // user id
    try {
        const favList = await Fav.find({ user: id }).populate("product").exec();
        res.status(200).json(favList);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}
exports.removeFromFav = async (req, res) => {
    try {
        const id = req.body._id;
        const result = await Fav.deleteOne(new ObjectId(id))
        res.status(!!result.deletedCount ? 200 : 400).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}