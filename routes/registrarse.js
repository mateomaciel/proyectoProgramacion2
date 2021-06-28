var express = require('express');
var router = express.Router();
const registrarse = require('../Controllers/registrarseController')
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/images/avatars')
  },
  filename: (req, file, cb) => {
  cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
 })
 var upload = multer({ storage: storage })

router.get('/', registrarse.index)
router.post('/agregarUsuario', upload.single('avatar') , registrarse.agregarUsuario)

module.exports = router;