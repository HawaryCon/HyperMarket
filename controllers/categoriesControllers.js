const Category = require("../models/categoriesModel");
const { ObjectId } = require("bson");
exports.createCategory = async (req, res) => {
    const categoryData = req.body;

    const newCategory = new Category(categoryData);
    try {
        const nCat = await newCategory.save();
        res.status(201).json(nCat);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}
exports.getCategory = async (req, res) => {
    const name = req.body.name; // category name
    try {
        const category = await Category.find({ name: name }).populate("product").exec();
        res.status(200).json(category)
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}
exports.deleteFromCategory = async (req, res) => {
    try {
        const id = req.params._id;
        const result = await Category.deleteOne(new ObjectId(id))
        res.status(!!result.deletedCount ? 200 : 400).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getAllCategory = async (req, res) => {
    
    try {
        const category = await Category.find().populate("product").exec();
        res.status(200).json(category)
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}