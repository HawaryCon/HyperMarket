const { ObjectId } = require("bson");
const Product = require("../models/productsModel.js");


exports.createProduct = async (req, res) => {


  

    try {
        const pData = req.body;
        const newP = new Product(pData);
        const savedProduct = await newP.save();
        return res.status(201).json(savedProduct);


    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}
exports.getProduct = async (req, res) => {
    
    try {

        const product = await Product.find();
        return res.status(200).json(product);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}
exports.updateProduct = async (req, res) => {
    try {
        const id = req.body._id;
        const { pname, image , desc , price } = req.body;
        let updatedProduct = await Product.findByIdAndUpdate(new ObjectId(id), { pname, image, desc, price })
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }

}
exports.deleteProduct = async (req, res) => {
    try {
        const  id  = req.body._id;
        const result = await Product.deleteOne( new ObjectId(id) )
        res.status(!!result.deletedCount ? 200 : 400).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}