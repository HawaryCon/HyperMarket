// const Category = require("../models/categoriesModel");
// const { ObjectId } = require("bson");

// const { config } = require('dotenv');
// config();
// const fs = require('fs');
// const ImageKit = require("imagekit")
// const imageKit = new ImageKit({
//     publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//     privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//     urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
// })
// //last thing was replacing the 2 ifs wyh switch
// exports.createCategory = async (req, res) => {
//     if (req.file) {
//         var folderName="images";
//         const id = req.body.id;
//         switch (id) {
//             case value:
//                 folderName = "secret";
//                 break;
        
//             default:
//                 break;
//         } 
//         const data = fs.readFileSync(req.file.path);
//         imageKit.upload({
//             file: data,
//             fileName: req.file.originalname,
//             folder: folderName
//         }, async (err, response) => {
//             if (err) {
//                 return res.status(500).json({
//                     status: "failed",
//                     message: "An error occured during file upload. Please try again."
//                 })
//             }
//             const name = req.body.name;
//             const product = req.body.product;
//             const icon = response["url"];
//             const newCategory = new Category({ name: name, product: product, icon: icon });
//             const nCat = await newCategory.save();
//             res.status(201).json(nCat);
//         //  res.json({ status: "success", url: response, message: "Successfully uploaded files" });
//         })
//     }
      
//     else {
//         const categoryData = req.body;

//         const newCategory = new Category(categoryData);
//         try {
//             const nCat = await newCategory.save();
//             res.status(201).json(nCat);
//         }
//         catch (error) {
//             return res.status(420).json({ message: error.message })
//         }
//     }
    
// }
// exports.getCategory = async (req, res) => {
//     const name = req.body.name; // category name
//     try {
//         const category = await Category.find({ name: name }).populate("product").exec();
//         res.status(200).json(category)
//     }
//     catch (error) {
//         return res.status(420).json({ message: error.message })
//     }
// }
// exports.deleteFromCategory = async (req, res) => {
//     try {
//         const id = req.params._id;
//         const result = await Category.deleteOne(new ObjectId(id))
//         res.status(!!result.deletedCount ? 200 : 400).json(result);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// exports.getAllCategory = async (req, res) => {
    
//     try {
//         const category = await Category.find().populate("product").exec();
//         res.status(200).json(category)
//     }
//     catch (error) {
//         return res.status(420).json({ message: error.message })
//     }
// }