module.exports=function(sequelize, dataTypes){
    let alias='User'
    
    let cols={
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        apellido:{
            type: dataTypes.STRING,
        },
        edad:{
            type: dataTypes.INTEGER,
        },
        username:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
        },
        avatar:{
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
        table: 'users',
        timestamps: true,


    }

    const User = sequelize.define(alias, cols, config);
    User.associate = function(models){
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "idUsuario"
        })
        User.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "idUsuario"
        })
    }
    return User;

}