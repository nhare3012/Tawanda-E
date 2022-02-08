const  express  = require("express");
const router = express.Router();

const {getAllProducts, getProductById} = require("../controller/productControllers");

// #desc Get all products from db
// @route Get API/products
router.get('/', getAllProducts)


// #desc Get a product by id from db
// @route Get API/products/:id
router.get(':id', getProductById)

module.exports = router;

