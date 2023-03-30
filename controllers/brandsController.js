const Brand = require("../models/brandsModel");
const { ObjectId } = require("bson");
exports.addBrand = async (req, res) => {
    const brandData = req.body;

    const nAddedProduct = new Brand(brandData);
    try {
        const nProduct = await nAddedProduct.save();
        res.status(201).json(nProduct);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}
exports.getBrand = async (req, res) => {
    const name = req.body.name; //brand name
    try {
        const brandProducts = await Brand.find({ name: name }).populate("product").exec();
        res.status(200).json(brandProducts)
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}
exports.deleteFromBrand = async (req, res) => {
    try {
        const id = req.params._id
        const result = await Brand.deleteOne(new ObjectId(id))
        res.status(!!result.deletedCount ? 200 : 400).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}