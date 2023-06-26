const productsRoutes = require ('./src/routes/productsRoutes');
const usersRoutes = require ('./src/routes/usersRoutes');


const express = require('express');
const path = require ('path');
const app = express ();

app.use ('/', productsRoutes);

app.use ('/', usersRoutes);

app.use ('*', function (req, res){
          res.send("ruta erronea")
});

app.use(express.static(path.resolve(__dirname,'./public')));

app.set ('view engine', 'ejs');

app.listen(3004, () => {
    console.log('Esto fue exitoso')
});

