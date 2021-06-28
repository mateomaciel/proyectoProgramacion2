var express = require('express');
var router = express.Router();
const editarPerfil = require('../Controllers/editarPerfil')


router.get('/', editarPerfil.index)
router.post('/editar/:id', editarPerfil.editar)

module.exports = router;