const db = require('../database/models');
const agregarProducto = {
  index: function (req, res) {
    if (req.session.user == undefined) {
      return res.redirect("/iniciarSesion");
    } else {
      return res.render("agregarProducto");
    }
  },
  agregar: function(req, res){
    const {idUsuario,nombreJuego,urlImg,descripcion,puntaje,resumen} =req.body
    db.Product.create({
      idUsuario: req.session.user.id,nombreJuego:nombreJuego,urlImg:req.file.filename,descripcion:descripcion,puntaje:puntaje,resumen:resumen
    })
    .then(function(producto){
      console.log(producto);
        return res.redirect('/')
    })
    console.log(req.body);
  }
};

module.exports = agregarProducto;
