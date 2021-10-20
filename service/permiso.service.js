const boom = require('@hapi/boom');

//palabra reservada en donde nos guarda todos los modelos creados
const {models}=require('./../libs/sequelize');

class PermisoService{
  constructor(){}

  async create(data){
    const permiso= await models.Permiso.create(data);
    return permiso;
  }

  async find(){
    const result = await models.Permiso.findAll();
    return result;
  }

  async findOne(id){
    const permiso = await models.Permiso.findByPk(id);
    if(!permiso){
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
