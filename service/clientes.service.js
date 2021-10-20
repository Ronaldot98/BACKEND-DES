const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class ClienteService{
  constructor(){}

  async create(data){
    const newClien= await models.Cliente.create(data);
    return newClien;
  }

  async find(){
    const result = await models.Cliente.findAll();
    return result;
  }

  async findOne(id){
    const Client = await models.Cliente.findByPk(id);
    if(!Client){
      throw boom.notFound('id no encontrado');
    }
    return Client;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_Client= await this.findOne(id);
    const resul= await id_Client.update(data);
    return resul;
  }

  async delete(id){
    const id_Client = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_Client.destroy();
    return {id};
  }
}

module.exports = ClienteService;
