const { Model, DataTypes, Sequelize } = require('sequelize');
const { DIRECCION_TABLE } = require('./direccion.model');


const SUCURSAL_TABLE = 'sucursales';

const EsquemaTb_sucursal = {
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
  telefono: {
    allowNull: false,
    type: DataTypes.STRING
  },
  correo: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
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

class Sucursal extends Model {
  static associate(models) {
    this.hasMany(models.Empleado, {
      as: 'empleado',
      foreignKey: 'sucurId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SUCURSAL_TABLE,
      modelName: 'Sucursal'
    }
  }
}


module.exports = { Sucursal, EsquemaTb_sucursal, SUCURSAL_TABLE };
