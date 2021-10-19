const {Model,DataTypes,Sequelize} = require('sequelize');

const PERMISO_TABLE='permisos';

const EsquemaTb_permiso = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  permiso1:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  permiso2:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  permiso3:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }

}

class Permiso extends Model{
  static associated(models){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PERMISO_TABLE,
      modelName: 'permiso',
      timestamps:false
    }
  }
}

module.exports = {Permiso,EsquemaTb_permiso,PERMISO_TABLE};