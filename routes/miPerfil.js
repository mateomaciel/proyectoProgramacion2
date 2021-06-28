var express = require('express');
var router = express.Router();
const miPerfil = require('../Controllers/miPerfilController')


router.get('/', miPerfil.index)

module.exports = router;