var express = require('express');
var router = express.Router();
const todosProductos = require('../Controllers/todosProductosController')


router.get('/', todosProductos.index)

module.exports = router;