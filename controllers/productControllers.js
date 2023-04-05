const { ObjectId } = require("bson");
const Pricing = require("../models/pricingModel.js");
const Product = require("../models/productsModel.js");


exports.createProduct = async (req, res) => {


  

    try {
        const pData = req.body;
        const newP = new Product(pData);
        const savedProduct = await newP.save();
        res.status(201).json(savedProduct);


    }
    catch (error) {
         res.status(420).json({ message: error.message })
    }
}
exports.getProducts = async (req, res) => {
    
    try {

        const product = await Product.find().populate("price").exec();
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
        let oldData = await Product.findById(new ObjectId(id))
        if (price){
            let updatedPricing = await (new Pricing({ value: price["value"] , size: price["size"], color : price["color"] , model : price["model"] })).save();
            const newProductInfo = { pname: pname, image: image, desc: desc, price: [...oldData.price,  updatedPricing._id] }
            let updatedProduct = await Product.findByIdAndUpdate(new ObjectId(id), newProductInfo);
            res.status(200).json(updatedProduct); 
        }
        else {
            const newProductInfo = {pname: pname, image: image, desc: desc}
            let updatedProduct = await Product.findByIdAndUpdate(new ObjectId(id), newProductInfo);
            res.status(200).json(updatedProduct);
        }

    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }

}
exports.deleteProduct = async (req, res) => {
    try {
        const  id  = req.body._id;
        const result = await Product.deleteOne(new ObjectId(id))
        const price = req.body.price;
        for (let index = 0; index < price.length; index++) {
            const pid = price[index]
            await Pricing.deleteOne(new ObjectId(pid))
            }
        res.status(!!result.deletedCount ? 200 : 400).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.hotDeals = async (req, res) => {

    try {

        const product = await Product.find().populate("price").exec();
        let pp = [];
        for (let index = 0; index < product.length; index++) {
            for (let j = 0; j < (product[index]["price"]??[]).length; j++) {
                if (product[index]["price"][j]["afterSaleValue"]) {
                    pp.push(product[index])
                }
                
            }
        }
        return res.status(200).json(pp);
    }
    catch (error) {
        return res.status(420).json({ message: error.message })
    }
}