const express = require('express');

const app = express ();

const path = require ('path');


app.use(express.static(path.join(__dirname, './public')))

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));
    });
    

app.listen(3004, () => console.log('Esto fue exitoso'));


