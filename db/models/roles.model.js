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
  permisoId:{
    field: 'id_permiso',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: PERMISO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  estado:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}

class Rol extends Model{
  static associate(models){
  this.belongsTo(models.Permiso, {
    as: 'permiso'});


    this.hasMany(models.Usuario,{
      as:  'usuario',
      foreignKey: 'rolId'
    });

  }



  static config(sequelize){
    return {
      sequelize,
      tableName: ROL_TABLE,
      modelName: 'Rol'

    }
  }
}


module.exports = {Rol,EsquemaTb_rol,ROL_TABLE};
