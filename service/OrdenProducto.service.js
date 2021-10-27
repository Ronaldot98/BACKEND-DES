const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class OrderProducto{
  constructor(){}

  async create(data){
    const newOrderPro= await models.OrdenProducto.create(data);
    return newOrderPro;
  }

  async find(){
    const result = await models.OrdenProducto.findAll();
    return result;
  }

  async findOne(id){
    const newOrderPro = await models.OrdenProducto.findByPk(id);
    if(!newOrderPro){
      throw boom.notFound('id no encontrado');
    }
    return newOrderPro;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_order = await this.findOne(id);
    const resul= await id_order.update(data);
    return resul;
  }

  async delete(id){
    const id_order = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_order.destroy();
    return {id};
  }
}

module.exports = OrderProducto;
