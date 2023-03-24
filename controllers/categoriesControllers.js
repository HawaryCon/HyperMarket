const Category = require("../models/categoriesModel");
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
    const id = req.body._id; // user id
    try {
        const category = await Category.findById(id);
        res.status(200).json(category)
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}