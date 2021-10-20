const {Model,DataTypes,Sequelize} = require('sequelize');

const {PERMISO_TABLE} = require('./permisos.model');

const ROL_TABLE='roles';

const EsquemaTb_rol={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING
  },
  estado:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  Idpermiso:{
    field: 'id_permiso',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: PERMISO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Rol extends Model{
  static associate(models){
    this.belongsTo(models.Permiso, {
      as: 'permiso'});
  }

  static config (sequelize){
    return{
      sequelize,
      tableName: ROL_TABLE,
      modelName: 'Rol',
      timestamps: false
    }
  }
}


module.exports = {Rol,EsquemaTb_rol,ROL_TABLE};
