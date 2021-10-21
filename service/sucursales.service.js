const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class SucursalService{
  constructor(){}

  async create(data){
    const newSucursal= await models.Sucursal.create(data);
    return newSucursal;
  }

  async find(){
    const result = await models.Sucursal.findAll();
    return result;
  }

  async findOne(id){
    const Sucur = await models.Sucursal.findByPk(id);
    if(!Sucur){
      throw boom.notFound('id no encontrado');
    }
    return Sucur;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_Sucur = await this.findOne(id);
    const resul= await id_Sucur.update(data);
    return resul;
  }

  async delete(id){
    const id_Sucur = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_Sucur.destroy();
    return {id};
  }
}

module.exports = SucursalService;
