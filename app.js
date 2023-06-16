const express = require('express');

const app = express ();

const path = require ('path');

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));
    });
    
app.get('/carrito', function (req, res){
res.sendFile(path.join(__dirname, '/views/carrito.html'));
});
app.use('/public', express.static(path.join(__dirname, 'public')));
        
app.listen(3004, () => console.log('Esto fue exitoso'));