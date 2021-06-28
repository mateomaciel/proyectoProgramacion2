const db = require('../database/models');
const bcrypt = require('bcryptjs');


const registrarse ={

    index: function(req, res) {
      if (req.session.user == undefined) {
        return res.render('registrarse', {
          error: ""
        });
      } else {
        return res.redirect("/");
      }},
      
      agregarUsuario: function(req, res) {
        const {nombre, username, apellido,edad, email, password} = req.body;
        if(password.length<3){
          return res.render('registrarse', {
            error: "la contraseña debe tener mas de 3 caracteres"
          });
        }
        if(email == "")
                return res.render('registrarse',{
                  error:'el email esta vacio, porfavor completelo'})
        db.User.findOne({
            where: [
              {email:email}
            ] 
          }).then(resultado =>{
              console.log(resultado);
              if(resultado)
                return res.render('registrarse',{
                    error:'el email ya existe'
                })
               else{
                const passwordhash = bcrypt.hashSync(password,10);
                db.User.create({nombre:nombre,username:username,apellido:apellido,edad:edad,email:email,password:passwordhash, avatar:req.file.filename})
                  .then(function(user){
                    console.log(user);
                      return res.render('iniciarSesion')
                  })
                  
                  
                  
               }
          })
       
    }


}

module.exports = registrarse