const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const {models}=require('./../libs/sequelize');


class EmpleadoService{
  constructor(){}

  async create(data){
    const newEmp= await models.Empleado.create(data);
    return newEmp;
  }

  async find(){
    const result = await models.Empleado.findAll({
      where:{
        estado:{
          [Op.eq]:true
        }
      }
      });
    return result;
  }

  async findInactivos(){
    const result = await models.Empleado.findAll({
      where:{
        estado:{
          [Op.eq]:false
        }
      }
      });
    return result;
  }


  async findOne(id){
    const Emp = await models.Empleado.findByPk(id);
    if(!Emp){
      throw boom.notFound('id no encontrado');
    }
    return Emp;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_Emp = await this.findOne(id);
    const resul= await id_Emp.update(data);
    return resul;
  }

  async delete(id){
    const id_Emp = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_Emp.destroy();
    return {id};
  }
}

module.exports = EmpleadoService;
