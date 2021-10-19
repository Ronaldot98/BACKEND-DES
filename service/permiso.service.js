const boom = require('@hapi/boom');

//palabra reservada en donde nos guarda todos los modelos creados
const {models}=require('./../libs/sequelize');

class PermisoService{
  constructor(){}

  async create(data){
    const permiso= await models.permiso.create(data);
    return permiso;
  }

  async find(){
    const result = await models.permiso.findAll();
    return result;
  }

  async findOne(id){
    const permiso = await models.permiso.findByPk(id);
    if(!peprmiso){
      throw boom.notFound('id no ecnotrado');
    }
    return permiso;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_permiso = await this.findOne(id);
    const resul= await id_permiso.update(data);
    return resul;
  }

  async delete(id){
    const id_permiso = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_permiso.destroy();
    return {id};
  }
}

module.exports = PermisoService;
