const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class RolesService{
  constructor(){}

  async create(data){
    const rol= await models.Rol.create(data);
    return rol;
  }

  async find(){
    const result = await models.Rol.findAll();
    return result;
  }

  async findOne(id){
    const rol = await models.Rol.findByPk(id);
    if(!rol){
      throw boom.notFound('id no encontrado');
    }
    return rol;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_rol = await this.findOne(id);
    const resul= await id_rol.update(data);
    return resul;
  }

  async delete(id){
    const id_rol = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_rol.destroy();
    return {id};
  }
}

module.exports = RolesService;
