var express = require('express');
var router = express.Router();
const resultados = require('../Controllers/resultadosBusquedaController')


router.get('/', resultados.index)

module.exports = router;
