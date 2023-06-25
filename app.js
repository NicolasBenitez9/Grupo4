const productosRoutes = require ('./routes/productosRoutes');


const express = require('express');
const path = require ('path');
const app = express ();

app.use ('/', productosRoutes);

app.use ('*', function (req, res){
          res.send("ruta erronea")
});

app.use(express.static(path.resolve(__dirname,'./public')));

app.set ('view engine', 'ejs');

app.listen(3004, () => {
    console.log('Esto fue exitoso')
});

