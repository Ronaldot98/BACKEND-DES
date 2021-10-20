const Joi= require('joi');
const id= Joi.number().integer();
const nombre= Joi.string();
const estado= Joi.boolean();
const idPermiso= Joi.number().integer();

const createRolEsquema = Joi.object({
  nombre: nombre.required(),
  estado: estado,
  idPermiso: idPermiso
});

const updateRolEsquema = Joi.object({
  nombre: nombre,
  estado: estado,
  idPermiso: idPermiso
});

const getRolEsquema = Joi.object({
  id: id.required()
});

module.exports = {createRolEsquema,updateRolEsquema,getRolEsquema};
