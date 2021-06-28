const db = require('../database/models')

const detalleProducto ={

    index: function(req, res) {
      let id= req.params.id;
        let Prod = db.Product.findByPk(id, {include: [{association: "users"}]})
        let Comm = db.Comment.findAll(
          {where: [{idJuego: id}],include: [{association: "users"}], order: [['createdAt', 'DESC']]}
        )
        Promise.all([Prod, Comm])
        .then(function([Prod, Comm]){return res.render('detalleProducto', {Prod, Comm})})
        .catch(error=>{console.log(error)})
      },

    destroy: function(req, res) {
      let juegoBorrado = req.params.id;

      db.Product.destroy({
        where: [
          {id: juegoBorrado}
        ]
      })
      
      .then( () => {
        return res.redirect('/');
      })

      .catch(error=>{console.log(error)})

      
    },

    coment: function(req, res) {
      let idUsu = req.params.idu;
      let idProd = req.params.idp;
      let comentario = req.body.comentario;

      db.Comment.create({
        idUsuario: idUsu,
        idJuego: idProd,
        comentario: comentario,
      })

      .then( (comentarioCreado) => {
        return res.redirect("/")
      })

      .catch(error => {
        console.log(error);
    })


    }


}

module.exports = detalleProducto