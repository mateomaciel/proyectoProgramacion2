const db = require('../database/models');
const bcrypt = require('bcryptjs');
const op = db.Sequelize.Op;

const inicioSesion ={

    index: function(req, res) {

      if (req.session.user == undefined) {
        return res.render("iniciarSesion");
      } else {
        return res.redirect("/");
      }},

    login: function(req,res){
      db.User.findOne({
        where: [{email: req.body.email}]
      })
      .then( user => {
        let errors = {};
        if(user == null){
            errors.message = "El email no existe"
            res.locals.errors = errors
            return res.render('iniciarSesion');
        } else if(bcrypt.compareSync(req.body.password, user.password) == false){
            errors.message = "La contraseña es incorrecta"
            res.locals.errors = errors
            return res.render('iniciarSesion');
        } else {
            req.session.user = user;
            if(req.body.rememberme != undefined){
                res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5})
            }
            return res.redirect('/');        
        }
    })
    .catch( e => {console.log(e)})           
},

    salir: function(req, res) {
       req.session.destroy();
       res.clearCookie('userId');
       return res.redirect('/')
    },
  
}

module.exports = inicioSesion