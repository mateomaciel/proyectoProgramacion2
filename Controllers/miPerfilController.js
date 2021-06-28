const db = require('../database/models')
const miPerfil ={

    index: function(req, res) {

      if (req.session.user == undefined) {
        return res.redirect("/iniciarSesion");
      } else {let id= req.session.user.id;
        db.User.findByPk(id, {include: [{association: "products", include: [{association: "comments"}]}, {association: "comments"}]})
        .then(data=>{res.render('miPerfil', {users: data})})
        .catch(error=>{console.log(error)})
      }

      }


}

module.exports = miPerfil