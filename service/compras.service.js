const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class CompraService{
  constructor(){}

  async create(data){
    const newCompra= await models.Compras.create(data);
    return newCompra;
  }

  async find(){
    const result = await models.Compras.findAll();
    return result;
  }

  async findOne(id){
    const compra = await models.Compras.findByPk(id);
    if(!compra){
      throw boom.notFound('id no encontrado');
    }
    return compra;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_compra = await this.findOne(id);
    const resul= await id_compra.update(data);
    return resul;
  }

  async delete(id){
    const id_compra = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_compra.destroy();
    return {id};
  }
}

module.exports = CompraService;
