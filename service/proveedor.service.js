const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const {models}=require('./../libs/sequelize');


class ProveedorService{
  constructor(){}

  async create(data){
    const newProv= await models.Proveedor.create(data);
    return newProv;
  }

  async find(){
    const result = await models.Proveedor.findAll({
      where:{
        estado:{
          [Op.eq]:true
        }
      }
      });
    return result;
  }

  async findInactivos(){
    const result = await models.Proveedor.findAll({
      where:{
        estado:{
          [Op.eq]:false
        }
      }
      });
    return result;
  }


  async findOne(id){
    const prov = await models.Proveedor.findByPk(id);
    if(!prov){
      throw boom.notFound('id no encontrado');
    }
    return prov;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_prov = await this.findOne(id);
    const resul= await id_prov.update(data);
    return resul;
  }

  async delete(id){
    const id_prov = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_prov.destroy();
    return {id};
  }
}

module.exports = ProveedorService;
