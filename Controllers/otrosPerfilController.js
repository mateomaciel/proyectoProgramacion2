const db = require('../database/models')

const otrosPerfil ={

    index: function(req, res) {
        let id= req.params.id;
          db.User.findByPk(id, {include: [{association: "products", include: [{association: "comments"}]}, {association: "comments"}]})
          .then(data=>{res.render('otrosPerfil', {users: data})})
          .catch(error=>{console.log(error)})
        }
  


}

module.exports = otrosPerfil