const db = require('../database/models')
const editarProducto ={

    index: function(req, res) {
      if (req.session.user == undefined) {
        return res.redirect("/iniciarSesion");
      } else {
      let id = req.params.id  
      db.Product.findByPk(id)
      .then(data =>{return res.render('editarProducto', {products: data})})
      }}, 


    editar: function(req, res){
      let fila = req.params.id;
      let data = req.body;

      db.Product.update({
        nombreJuego: data.ndj,
        urlImg: data.url,
        puntaje: data.puntaje,
        resumen: data.resumen,
        descripcion: data.descripcion,
      },{where: {id:fila}})

      .then( () => {
        return res.redirect('/');
      })


      

    }

  }
module.exports = editarProducto