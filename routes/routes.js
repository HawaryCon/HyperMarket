const express = require('express');
// const multer = require("multer")
// const upload = multer({ dest: "uploads/" })

const userControllers = require('../controllers/userControllers.js')
const iGenerate = require('../controllers/createImage.js')
const productControllers = require('../controllers/productControllers.js')
const cartControllers = require('../controllers/cartControllers.js')
const favControllers = require('../controllers/favControllers.js')
const orderControllers = require('../controllers/orderItemsControllers.js')
// const categoriesControllers = require('../controllers/categoriesControllers.js')
const brandsControllers = require('../controllers/brandsController.js')
const pricingControllers = require('../controllers/pricingControllers.js')
const search = require('../controllers/search.js')
// const img = require('../controllers/img.js')



const router = express.Router();
router.get('/' , (req , res ) => {
     res.status(201).json("Hello World");
})
router.get('/search/:key', search.search);

router.post('/gen', iGenerate.createImage);

// router.post("/upload_files", upload.single("file"), img.uploadFile);



router.post('/createUser', userControllers.createUser);
router.get('/getUser', userControllers.getUser);
router.patch('/updateUser', userControllers.updateUser);

router.post('/createProduct', productControllers.createProduct);
router.get('/getProducts', productControllers.getProducts);
router.patch('/updateProduct', productControllers.updateProduct);
router.delete('/deleteProduct', productControllers.deleteProduct);
router.get('/hotDeals', productControllers.hotDeals);


router.post('/addToCart', cartControllers.addToCart);
router.get('/viewCart', cartControllers.getCart);
router.delete('/deleteFromCart', cartControllers.deleteCartItem);

router.post('/addToFav', favControllers.addToFav);
router.get('/getFav', favControllers.getFav);
router.delete('/removeFromFav', favControllers.removeFromFav);

router.post('/createOrder', orderControllers.createOrder);
router.get('/getOrder', orderControllers.getOrder);
router.get('/getOrders', orderControllers.getOrders);

// router.post('/createCategory', upload.single("file"), categoriesControllers.createCategory);
// router.get('/getCategory', categoriesControllers.getCategory);
// router.get('/allCategories', categoriesControllers.getAllCategory);
// router.delete('/deleteFromCategory', categoriesControllers.deleteFromCategory);

router.post('/addToBrand', brandsControllers.addBrand);
router.get('/getBrand', brandsControllers.getBrand);
router.delete('/deletefromBrand', brandsControllers.deleteFromBrand);

router.post('/newPriceTag', pricingControllers.priceTag);
router.delete('/deletePriceTag', pricingControllers.deletePriceTag);
router.patch('/updatePriceTag', pricingControllers.updatePriceTag);
router.patch('/promoteProduct', pricingControllers.promoteProduct);

module.exports = router;