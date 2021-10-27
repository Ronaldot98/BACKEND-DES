const {Model,DataTypes,Sequelize} = require('sequelize');
const { PRODUCTO_TABLE } = require('./producto.model');
const { PROVEEDOR_TABLE } = require('./proveedores.model');

const COMPRA_TABLE='compras';

const EsquemaTb_compras={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  cantidad:{
    allowNull: false,
    type: DataTypes.INTEGER,

  },
  fecha:{
    allowNull: false,
    type: DataTypes.STRING
  },
  precioCompra:{
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  produId:{
    field: 'id_producto',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCTO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  provId:{
    field: 'id_proveedor',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PROVEEDOR_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },


}

class Compras extends Model{
  static associate(models){



  }

  static config(sequelize){
    return {
      sequelize,
    tableName: COMPRA_TABLE,
      modelName: 'Compras'

    }
  }
}


module.exports = {Compras,EsquemaTb_compras,COMPRA_TABLE};
