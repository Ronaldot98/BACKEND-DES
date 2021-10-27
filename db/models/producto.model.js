const {Model,DataTypes,Sequelize} = require('sequelize');



const PRODUCTO_TABLE='productos';

const EsquemaTb_producto={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING,

  },
  precio:{
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  descripcion:{
    allowNull: false,
    type: DataTypes.STRING
  },
  imagen:{
    allowNull: false,
    type: DataTypes.STRING
  },
  estado:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },


}

class Producto extends Model{
  static associate(models){

    this.hasMany(models.Compras,{
      as: 'compras',
      foreignKey: 'produId'
    });


    this.hasMany(models.OrdenProducto,{
      as: 'ordenproducto',
      foreignKey: 'ordenId'
    });

       //una orden tiene muchos productos
       this.belongsToMany(models.Categoria,{
        as: 'items',

       //esa tabla es la intermedia
       through: models.ProductoCategoria,
       //especificar la llave forranea
       foreignKey: 'categoriaId',
       otherKey: 'productoId'

      })

  }

  static config(sequelize){
    return {
      sequelize,
    tableName: PRODUCTO_TABLE,
      modelName: 'Producto'

    }
  }
}


module.exports = {Producto,EsquemaTb_producto,PRODUCTO_TABLE};
