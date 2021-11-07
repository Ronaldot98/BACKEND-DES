const { Model, DataTypes, Sequelize } = require('sequelize');
const { DIRECCION_TABLE } = require('./direccion.model');


const PROVEEDOR_TABLE = 'proveedores';

const EsquemaTb_proveedores = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,

  },

  rubro: {
    allowNull: false,
    type: DataTypes.STRING
  },
  correo: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  telefono: {
    allowNull: false,
    type: DataTypes.STRING
  },
  direId: {
    field: 'id_direccion',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DIRECCION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },


}

class Proveedor extends Model {
  static associate(models) {

    this.hasMany(models.Compras,{
      as: 'compras',
      foreignKey: 'produId'
    });

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROVEEDOR_TABLE,
      modelName: 'Proveedor'

    }
  }
}


module.exports = { Proveedor, EsquemaTb_proveedores, PROVEEDOR_TABLE };
