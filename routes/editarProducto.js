var express = require('express');
var router = express.Router();
const editarProducto = require('../Controllers/editarProducto')


router.get('/:id', editarProducto.index)
router.post('/editar/:id', editarProducto.editar)

module.exports = router;