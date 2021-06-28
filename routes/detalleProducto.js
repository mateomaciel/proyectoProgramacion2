var express = require('express');
var router = express.Router();
const detalleProducto = require('../Controllers/detalleProductoController')


router.get('/:id', detalleProducto.index)
router.post('/delete/:id', detalleProducto.destroy)
router.post('/coment/:idu/:idp', detalleProducto.coment)

module.exports = router;