const productosController = require('../controllers/productosControllers.js') 

const express = require('express');
const router = express.Router();

router.get('/', productosController.index)
router.get('/carrito', productosController.producto)


module.exports = router;