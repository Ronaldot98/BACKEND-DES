const {Model,DataTypes,Sequelize} = require('sequelize');

const {EMPLEADOS_TABLE} = require('./empleados.model');
const {COMPRA_TABLE} = require('./compras.model');

const ORDEN_ENVIO_TABLE='orden_envio';

const EsquemaTb_ordenenvio = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  observacion:{
    allowNull: false,
    type: DataTypes.STRING

  },
  compraId:{
    field: 'id_compra',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: COMPRA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  empleadoId:{
    field: 'id_empleado',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: EMPLEADOS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  estado:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }

}

class OrdenEnvio extends Model{
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDEN_ENVIO_TABLE,
      modelName: 'OrdenEnvio'
    }
  }
}

module.exports = {ORDEN_ENVIO_TABLE,EsquemaTb_ordenenvio,OrdenEnvio};
