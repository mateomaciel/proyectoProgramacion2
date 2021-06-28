var express = require('express');
var router = express.Router();
const otros = require('../Controllers/otrosPerfilController')


router.get('/:id', otros.index)

module.exports = router;