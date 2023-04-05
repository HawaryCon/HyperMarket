const Category = require("../models/categoriesModel");
const Brand = require("../models/brandsModel");
const Product = require("../models/productsModel.js");

exports.search = async(req,res) =>{
    try {
        let Pdata = await Product.find(
            {
                "$or":[
                    {pname:{$regex:req.params.key}}
                ]
            }
        );
        let Bdata = await Brand.find(
            {
                "$or":[
                    {name:{$regex:req.params.key}}
                ]
            }
        );
        let Cdata = await Category.find(
            {
                "$or":[
                    {name:{$regex:req.params.key}}
                ]
            }
        );
        res.status(201).json({ "in products": Pdata, "in Brands": Bdata, "in Categories": Cdata, });
    }
    catch(error){
      res.status(420).json({ message: error.message })
    }
}