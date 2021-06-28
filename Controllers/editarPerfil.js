const db = require('../database/models')

const editarPerfil ={

    index: function(req, res) {

      if (req.session.user == undefined) {
        return res.redirect("/iniciarSesion");
      } else {
        return res.render("editarPerfil");
      }}, 

    editar: function(req, res) {

      let fila = req.params.id;
      let data = req.body;
      let user = {
        nombre: data.nombre,
        apellido: data.apellido,
        edad: data.edad,
        username: data.username,
        email: data.email,
      }


      db.User.update(user,{where: {id:fila}})

      .then( () => {

        db.User.findOne({
          where: [{email: req.body.email}]
        })
        
        .then(user => {
          req.session.user = user 
  
          return res.redirect('/')
        })
        
      })

      
      .catch(e => {console.log(e)})


      


    }


}

module.exports = editarPerfil