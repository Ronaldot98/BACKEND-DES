const {Model,DataTypes,Sequelize} = require('sequelize');


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
  }
}

class Rol extends Model{
  static associate(models){
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
