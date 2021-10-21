const {Model,DataTypes,Sequelize} = require('sequelize');


const DIRECCION_TABLE='direcciones';

const EsquemaTb_direccion={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  departamento:{
    allowNull: false,
    type: DataTypes.STRING
  },
  municipio:{
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion:{
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Direccion extends Model{
  static associate(models){
    this.hasMany(models.Sucursal,{
      as:  'sucursal',
      foreignKey: 'direId'
    });

    this.hasMany(models.Empleado,{
      as: 'empleado',
      foreignKey: 'direcId'
    });
    this.hasMany(models.Proveedor,{
      as: 'proveedor',
      foreignKey: 'direId'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: DIRECCION_TABLE,
      modelName: 'Direccion'

    }
  }
}


module.exports = {Direccion,EsquemaTb_direccion,DIRECCION_TABLE};
