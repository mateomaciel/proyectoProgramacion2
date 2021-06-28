var express = require('express');
var router = express.Router();
const inicioSesion = require('../Controllers/inicioSesion')


router.get('/', inicioSesion.index);
router.post('/', inicioSesion.login);
router.post('/salir', inicioSesion.salir);
module.exports = router;