const productosController = require('./../controllers/productosController')

const express = require('express');
const router = express.Router();

router.get('/', productosController.index)
router.get('/products', productosController.product)



module.exports = router;