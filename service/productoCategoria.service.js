const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class ProductoCategoria{
  constructor(){}

  async create(data){
    const newProdCat= await models.ProductoCategoria.create(data);
    return newProdCat;
  }

  async find(){
    const result = await models.ProductoCategoria.findAll();
    return result;
  }

  async findOne(id){
    const newProdCat = await models.ProductoCategoria.findByPk(id);
    if(!newProdCat){
      throw boom.notFound('id no encontrado');
    }
    return newProdCat;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_ProdCat = await this.findOne(id);
    const resul= await id_ProdCat.update(data);
    return resul;
  }

  async delete(id){
    const id_ProdCat = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_ProdCat.destroy();
    return {id};
  }
}

module.exports = ProductoCategoria;
