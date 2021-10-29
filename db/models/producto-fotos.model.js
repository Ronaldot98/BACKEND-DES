const {Model,DataTypes,Sequelize} = require('sequelize');
const { PRODUCTO_TABLE } = require('./producto.model');


const FOTOS_TABLE='fotosProductos';

const EsquemaTb_FOTOS={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  foto:{
    allowNull: false,
    type: DataTypes.STRING,
  },


}

class Fotos extends Model{
  static associate(models){


  }

  static config(sequelize){
    return {
      sequelize,
    tableName: FOTOS_TABLE,
      modelName: 'Fotos'

    }
  }
}


module.exports = {Fotos,FOTOS_TABLE,EsquemaTb_FOTOS};
