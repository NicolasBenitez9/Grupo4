const usersControllers  = require("./../controllers/usersControllers.js");

const express = require('express');
const router = express.Router();

router.get('/register',usersControllers.registrarse);

router.get ('/login',usersControllers.iniciarSesion);

module.exports = router;
