const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const {models}=require('./../libs/sequelize');


class ProductoService{
  constructor(){}

  async create(data){
    const newProd= await models.Producto.create(data);
    return newProd;
  }

  async find(){


    const result = await models.Producto.findAll({
      where:{
        estado:{
          [Op.eq]:true
        }
      }
      }
    );
    return result;
  }

  async findInactivos(){
    const result = await models.Producto.findAll({
      where:{
        estado:{
          [Op.eq]:false
        }
      }
      });
    return result;
  }


  async findOne(id){
    const Prod = await models.Producto.findByPk(id);
    if(!Prod){
      throw boom.notFound('id no encontrado');
    }
    return Prod;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_prod = await this.findOne(id);
    const resul= await id_prod.update(data);
    return resul;
  }

  async delete(id){
    const id_prod = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_prod.destroy();
    return {id};
  }
}

module.exports = ProductoService;
