
const db = require('../database/models')
const op = db.Sequelize.Op
const resultados ={

    index: function(req, res){
      let info = req.query.search;

      db.Product.findAll({
          include: [{association: "users"}, {association: "comments"}],
          where: [{[op.or]: [{nombreJuego: {[op.like]: '%'+info+'%'}}, {descripcion: {[op.like]: '%'+info+'%'}}]}], 
          }
          )
          .then( data => { res.render('resultadosBusqueda',{products: data})})
          .catch( error => {
              console.log(error);
          })
  }


}

module.exports = resultados