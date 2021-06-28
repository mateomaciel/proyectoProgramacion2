module.exports=function(sequelize, dataTypes){
    let alias='Product'
    
    let cols={
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        idUsuario:{
            type: dataTypes.INTEGER,
        },
        nombreJuego:{
            type: dataTypes.STRING,
        },
        urlImg:{
            type: dataTypes.STRING,
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        puntaje:{
            type: dataTypes.FLOAT,
        },
        createdAt:{
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        deletedAt:{
            type: dataTypes.DATE,
        },
        resumen:{
            type: dataTypes.STRING,
        }
    }
    let config = {
        table: 'products',
        timestamps: true,


    }

    const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models){
        Product.belongsTo(models.User , {
            as: "users",
            foreignKey: "idUsuario"
        })
        Product.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "idJuego"
        })
    }
    return Product;

}