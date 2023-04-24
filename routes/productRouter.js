//import controller of product and review
const productController = require('../controllers/productController.js');
const reviewController = require('../controllers/reviewController');

//router
const router = require('express').Router();



router.post('/addProduct', productController.addProduct)

router.get('/allProduct', productController.getAllProduct)

router.get('/published', productController.getPublishedProduct)

//review url and controller

router.post('/addReview', reviewController.addReview)

router.get('/allReviews', reviewController.getAllReviews)



//product router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)


module.exports = router