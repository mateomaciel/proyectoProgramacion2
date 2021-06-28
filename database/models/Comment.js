const User = require("./User");

module.exports=function(sequelize, dataTypes){
    let alias='Comment'
    
    let cols={
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        idUsuario:{
            type: dataTypes.INTEGER,
        },
        idJuego:{
            type: dataTypes.INTEGER,
        },
        comentario:{
            type: dataTypes.STRING,
        },
        createdAt:{
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        deletedAt:{
            type: dataTypes.DATE,
        }
    }
    let config = {
        table: 'comments',
        timestamps: true,
    }

    const Comment = sequelize.define(alias, cols, config);
    Comment.associate = function(models){
        Comment.belongsTo(models.Product, {
            as: "products",
            foreignKey: "idJuego"
        })
        Comment.belongsTo(models.User, {
            as: "users",
            foreignKey: "idUsuario"
        })
    }
    return Comment;

}