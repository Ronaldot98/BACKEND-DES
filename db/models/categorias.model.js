const {Model,DataTypes,Sequelize} = require('sequelize');



const CATEGORIA_TABLE='categorias';

const EsquemaTb_categorias={
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
  descripcion:{
    allowNull: false,
    type: DataTypes.STRING
  },
  estado:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },


}

class Categoria extends Model{
  static associate(models){



  }

  static config(sequelize){
    return {
      sequelize,
    tableName: CATEGORIA_TABLE,
      modelName: 'Categoria'

    }
  }
}


module.exports = {Categoria,EsquemaTb_categorias,CATEGORIA_TABLE};
