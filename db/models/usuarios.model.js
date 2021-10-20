const {Model,DataTypes,Sequelize} = require('sequelize');
const {ROL_TABLE}= require('./roles.model');
const {EMPLEADOS_TABLE} = require('./empleados.model')


const USUARIO_TABLE='usuarios';

const EsquemaTb_usuario={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  usuario:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password:{
    allowNull: false,
    type: DataTypes.STRING
  },
  sesion:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  estado:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  rolId:{
    field: 'id_rol',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: ROL_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  empId:{
    field: 'id_empleado',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: EMPLEADOS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Usuario extends Model{
  static associate(models){
  this.belongsTo(models.Rol, {
    as: 'rol'});

  this.belongsTo(models.Empleado, {
    as: 'empleado'
  })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario'

    }
  }
}


module.exports = {Usuario,EsquemaTb_usuario,USUARIO_TABLE};
