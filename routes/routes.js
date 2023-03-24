const express = require('express');
const userControllers = require('../controllers/userControllers.js')
const productControllers = require('../controllers/productControllers.js')
const cartControllers = require('../controllers/cartControllers.js')
const favControllers = require('../controllers/favControllers.js')
const orderControllers = require('../controllers/orderControllers.js')
const categoriesControllers = require('../controllers/categoriesControllers.js')


const router = express.Router();
router.get('/' , (req , res ) => {
    return res.status(201).json("Hello World");
})

router.post('/createUser', userControllers.createUser);
router.get('/getUser', userControllers.getUser);
router.patch('/updateUser', userControllers.updateUser);

router.post('/createProduct', productControllers.createProduct);
router.get('/getProduct', productControllers.getProduct);
router.patch('/updateProduct', productControllers.updateProduct);
router.delete('/deleteProduct', productControllers.deleteProduct)


router.post('/addToCart', cartControllers.addToCart);
router.get('/viewCart', cartControllers.getCart);
router.delete('/deleteFromCart', cartControllers.deleteCartItem);

router.post('/addToFav', favControllers.addToFav);
router.get('/getFav', favControllers.getFav);
router.delete('/removeFromFav', favControllers.removeFromFav);

router.post('/createOrder', orderControllers.createOrder);
router.get('/getOrder', orderControllers.getOrder);

router.post('/createCategory', categoriesControllers.createCategory);
router.get('/getCategory', categoriesControllers.getCategory);


module.exports = router;