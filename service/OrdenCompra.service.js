const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class OrdenCompra{
  constructor(){}

  async create(data){
    const newOr= await models.OrdenCompra.create(data);
    return newOr;
  }

  async find(){
    const result = await models.OrdenCompra.findAll();
    return result;
  }

  async findOne(id){
    const Order = await models.OrdenCompra.findByPk(id);
    if(!Order){
      throw boom.notFound('id no encontrado');
    }
    return Order;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_Ord = await this.findOne(id);
    const resul= await id_Ord.update(data);
    return resul;
  }

  async delete(id){
    const id_Ord = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_Ord.destroy();
    return {id};
  }
}

module.exports = OrdenCompra;
