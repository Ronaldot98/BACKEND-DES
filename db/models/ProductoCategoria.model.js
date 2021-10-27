const {Model,DataTypes,Sequelize} = require('sequelize');

const {CATEGORIA_TABLE} = require('./categorias.model');
const {PRODUCTO_TABLE} = require('./producto.model');

const PRODUCTO_CATEGORIA_TABLE='productoCategorias';

const EsquemaTb_productoCat = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productoId:{
    field: 'id_producto',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: PRODUCTO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  categoriaId:{
    field: 'id_categoria',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: CATEGORIA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

}

class ProductoCategoria extends Model{
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCTO_CATEGORIA_TABLE,
      modelName: 'ProductoCategoria'
    }
  }
}

module.exports = {ProductoCategoria,EsquemaTb_productoCat,PRODUCTO_CATEGORIA_TABLE};
