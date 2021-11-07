const {Model,DataTypes,Sequelize} = require('sequelize');

const {OrdenCompra_TABLE} = require('./OrdenCompra.model');
const {PRODUCTO_TABLE} = require('./producto.model');

const ORDEN_PRODUCTO_TABLE='orden_producto';

const EsquemaTb_ordenProducto = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  cantidad:{
    allowNull: false,
    type: DataTypes.INTEGER

  },
  subtotal:{
    allowNull: false,
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
  ordenId:{
    field: 'id_orden',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: OrdenCompra_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

}

class OrdenProducto extends Model{
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDEN_PRODUCTO_TABLE,
      modelName: 'OrdenProducto'
    }
  }
}

module.exports = {OrdenProducto,ORDEN_PRODUCTO_TABLE,EsquemaTb_ordenProducto};
