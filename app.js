const express = require('express');

const productosRoutes = require('./src/routes/productosRoutes');
const usersRoutes = require ('./src/routes/usersRoutes')
const mainRoutes = require('./src/routes/mainRoutes')

const app = express ();

const path = require ('path');

app.use(express.static(path.resolve(__dirname, './public')));

app.set ('view engine', 'ejs');

app.use ('/', productosRoutes);
app.use('/', usersRoutes); 
app.use('/', mainRoutes);

app.use ('*', function (req, res){
  res.send("ruta erronea")
});

app.listen(3002, () => console.log('Esto fue exitoso'));

