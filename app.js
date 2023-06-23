const productosRoutes = require ('./routes/productosRoutes');

const express = require('express');

const app = express ();

const path = require ('path');

app.use(express.static(path.resolve(__dirname,'./public')))

app.set ('view engine', 'ejs')

app.use ('/', productosRoutes);

app.use ('*', function (req, res){
res.send("ruta erronea")
})

app.listen(3004, () => console.log('Esto fue exitoso'));

