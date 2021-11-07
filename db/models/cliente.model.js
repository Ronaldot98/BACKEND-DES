const {Model,DataTypes,Sequelize} = require('sequelize');



const CLIENTE_TABLE='clientes';

const EsquemaTb_clientes={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING,

  },
  apellido:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  correo:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  telefono:{
    allowNull: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  }


}

class Cliente extends Model{
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
    tableName: CLIENTE_TABLE,
      modelName: 'Cliente'

    }
  }
}


module.exports = {Cliente,EsquemaTb_clientes,CLIENTE_TABLE};
