var express = require('express');
var router = express.Router();
const agregarProducto = require('../Controllers/agregarProductoController')
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/images/juegos')
  },
  filename: (req, file, cb) => {
  cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
 })
 var upload = multer({ storage: storage })

router.get('/', agregarProducto.index)
router.post('/agregar', upload.single('juego'), agregarProducto.agregar)

module.exports = router;