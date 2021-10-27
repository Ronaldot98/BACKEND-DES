const {Model,DataTypes,Sequelize} = require('sequelize');
const {SUCURSAL_TABLE} = require('./sucursales.model');
const {DIRECCION_TABLE} = require('./direccion.model');


const EMPLEADOS_TABLE='empleados';

const EsquemaTb_empleados={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  primer_nombre:{
    allowNull: false,
    type: DataTypes.STRING
  },
  segundo_nombre:{
    allowNull: false,
    type: DataTypes.STRING
  },
  primer_apellido:{
    allowNull: false,
    type: DataTypes.STRING
  },
  segundo_apellido:{
    allowNull: false,
    type: DataTypes.STRING
  },
  genero:{
    allowNull: false,
    type: DataTypes.STRING
  },
  f_nacimiento:{
    allowNull: false,
    type: DataTypes.DATE
  },
  direcId:{
    field: 'id_direccion',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: DIRECCION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  sucurId:{
    field: 'id_sucursal',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: SUCURSAL_TABLE,
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

class Empleado extends Model{
  static associate(models){
    this.hasMany(models.Usuario,{
      as:  'usuario',
      foreignKey: 'empId'
    });
    this.hasMany(models.OrdenEnvio,{
      as:  'orderenvio',
      foreignKey: 'empleadoId'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: EMPLEADOS_TABLE,
      modelName: 'Empleado'

    }
  }
}


module.exports = {Empleado,EsquemaTb_empleados,EMPLEADOS_TABLE};
