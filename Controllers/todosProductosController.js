const db = require('../database/models')

const todosProductos ={

    index: function(req, res) {
        db.Product.findAll({
        include: [
          {association: "users"}, {association: "comments"}
        ]
        })
        .then(data=>{return res.render('todosProductos', {products: data})})
        .catch(error=> {console.log(error)})
        
      }


}

module.exports = todosProductos