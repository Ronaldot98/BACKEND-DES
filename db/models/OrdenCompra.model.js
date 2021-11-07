const {Model,DataTypes,Sequelize} = require('sequelize');

const {CLIENTE_TABLE} = require('./cliente.model');
const {DIRECCION_TABLE} = require('./direccion.model');

const OrdenCompra_TABLE='ordencompras';

const EsquemaTb_ordencompra = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fecha:{
    allowNull: false,
    type: DataTypes.DATE,

  },
  clienteId:{
    field: 'id_cliente',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: CLIENTE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  direId:{
    field: 'id_direccion',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: DIRECCION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

}

class OrdenCompra extends Model{
  static associate(models){

    this.belongsTo(models.Cliente,{
      as: 'cliente'
    });

    this.hasMany(models.OrdenEnvio,{
      as:  'ordeenvio',
      foreignKey: 'compraId'
    });

    // this.hasMany(models.OrdenProducto,{
    //   as:  'ordenproducto',
    //   foreignKey: 'ordenId'
    // });


      //una orden tiene muchos productos
      this.belongsToMany(models.Producto,{
        as: 'ord-producto',

       //esa tabla es la intermedia
       through: models.OrdenProducto,
       //especificar la llave forranea
       foreignKey: 'productoId',
       otherKey: 'ordenId'

      })


  }

  static config(sequelize){
    return {
      sequelize,
      tableName: OrdenCompra_TABLE,
      modelName: 'OrdenCompra'
    }
  }
}

module.exports = {OrdenCompra,EsquemaTb_ordencompra,OrdenCompra_TABLE};
