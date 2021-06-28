var express = require('express');
var router = express.Router();
const principal = require('../Controllers/principalController')


router.get('/', principal.index)

module.exports = router;
