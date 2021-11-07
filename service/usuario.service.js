const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const {models}=require('./../libs/sequelize');


class UserService{
  constructor(){}

  async create(data){
    const newUser= await models.Usuario.create(data);
    return newUser;
  }

  async find(){
    const result = await models.Usuario.findAll({
      where:{
        estado:{
          [Op.eq]:true
        }
      }
      });
    return result;
  }


  async findInactivos(){
    const result = await models.Usuario.findAll({
      where:{
        estado:{
          [Op.eq]:false
        }
      }
      });
    return result;
  }


  async findOne(id){
    const User = await models.Usuario.findByPk(id);
    if(!User){
      throw boom.notFound('id no encontrado');
    }
    return User;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_User = await this.findOne(id);
    const resul= await id_User.update(data);
    return resul;
  }

  async delete(id){
    const id_User = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_User.destroy();
    return {id};
  }
}

module.exports = UserService;
