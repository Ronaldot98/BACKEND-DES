const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class OrdenEnvio{
  constructor(){}

  async create(data){
    const newOrEnv= await models.OrdenEnvio.create(data);
    return newOrEnv;
  }

  async find(){
    const result = await models.OrdenEnvio.findAll();
    return result;
  }

  async findOne(id){
    const newOrEnv = await models.OrdenEnvio.findByPk(id);
    if(!newOrEnv){
      throw boom.notFound('id no encontrado');
    }
    return newOrEnv;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_OrdEnv = await this.findOne(id);
    const resul= await id_OrdEnv.update(data);
    return resul;
  }

  async delete(id){
    const id_OrdEnv = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_OrdEnv.destroy();
    return {id};
  }
}

module.exports = OrdenEnvio;
