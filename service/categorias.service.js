const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class CategoriaService{
  constructor(){}

  async create(data){
    const newCat= await models.Categoria.create(data);
    return newCat;
  }

  async find(){
    const result = await models.Categoria.findAll();
    return result;
  }

  async findOne(id){
    const Cat = await models.Categoria.findByPk(id);
    if(!Cat){
      throw boom.notFound('id no encontrado');
    }
    return Cat;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_Cat = await this.findOne(id);
    const resul= await id_Cat.update(data);
    return resul;
  }

  async delete(id){
    const id_Cat = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_Cat.destroy();
    return {id};
  }
}

module.exports = CategoriaService;
