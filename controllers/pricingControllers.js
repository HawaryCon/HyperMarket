const Pricing = require("../models/pricingModel");
const { ObjectId } = require("bson");
exports.priceTag = async (req, res) => {
    const tagData = req.body;

    const newTag = new Pricing(tagData);
    try {
        const nTaG = await newTag.save();
        res.status(201).json(nTaG);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}
exports.deletePriceTag = async (req, res) => {
    try {
        const id = req.body._id;
        const result = await Pricing.deleteOne(new ObjectId(id))
        res.status(!!result.deletedCount ? 200 : 400).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.updatePriceTag = async (req, res) => {
    try {
        const id = req.body._id;
        const { color, size, model , value } = req.body;
        const newTagInfo = { color: color, size: size, model: model, value: value }
        let updatedTag = await Pricing.findByIdAndUpdate(new ObjectId(id), newTagInfo);
        res.status(200).json(updatedTag);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.promoteProduct = async (req, res) => {
    try {
        const tagid = req.body._id;
        const saleAmount = req.body.saleAmount;
        const priceValue = req.body.priceValue;
        const newPriceValue = ((100-saleAmount)/100) * priceValue;
        // const newPriceInfo = { afterSaleValue: newPriceValue }
        let promotedProduct = await Pricing.findByIdAndUpdate(new ObjectId(tagid), { afterSaleValue: newPriceValue });
        res.status(200).json(promotedProduct);
        
    }
    catch {

    }
}