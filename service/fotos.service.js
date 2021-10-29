const boom = require('@hapi/boom');


const {models}=require('./../libs/sequelize');


class FotosService{
  constructor(){}

  async create(data){
    const newFotos= await models.Fotos.create(data);
    return newFotos;
  }


  async find(){
    const result = await models.Fotos.findAll();
    return result;
  }

  async findOne(id){
    const newFotos = await models.Fotos.findByPk(id);
    if(!newFotos){
      throw boom.notFound('id no encontrado');
    }
    return newFotos;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_foto= await this.findOne(id);
    const resul= await id_foto.update(data);
    return resul;
  }

  async delete(id){
    const id_foto = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_foto.destroy();
    return {id};
  }
}

module.exports = FotosService;
