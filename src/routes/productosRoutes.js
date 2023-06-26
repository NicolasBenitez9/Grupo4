const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index');
});

router.get('/carrito', (req, res)=>{
  res.render('carrito')
})

router.get('/producto', (req, res) => {
    res.render('producto')
})

module.exports = router;
