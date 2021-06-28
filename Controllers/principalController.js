const db = require('../database/models')

const principales ={

    index: function(req, res) {
        let ProdDESC = db.Product.findAll({
          order: [
        ['createdAt', 'DESC']
        ],
        include: [
          {association: "users"}, {association: "comments"}
        ]
        })
        
        let ProdPUNT = db.Product.findAll({
          order: [
        ['puntaje', 'DESC']
        ],
        include: [
          {association: "users"}, {association: "comments"}
        ]
        })

        Promise.all([ProdDESC, ProdPUNT])
        .then(function([ProdDESC, ProdPUNT]){
          return res.render('principal', {ProdDESC, ProdPUNT})
        })
      }


}

module.exports = principales