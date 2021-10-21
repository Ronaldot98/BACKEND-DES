const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class DireccionService{
  constructor(){}

  async create(data){
    const newDire= await models.Direccion.create(data);
    return newDire;
  }

  async find(){
    const result = await models.Direccion.findAll();
    return result;
  }

  async findOne(id){
    const Dire = await models.Direccion.findByPk(id);
    if(!Dire){
      throw boom.notFound('id no encontrado');
    }
    return Dire;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_Dire = await this.findOne(id);
    const resul= await id_Dire.update(data);
    return resul;
  }

  async delete(id){
    const id_Dire = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_Dire.destroy();
    return {id};
  }
}

module.exports = DireccionService;
