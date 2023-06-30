const express = require('express');
const router = express.Router();



router.get('/carrito', (req, res)=>{
  res.render('carrito')
})

router.get('/producto', (req, res) => {
    res.render('producto')
})

module.exports = router;
