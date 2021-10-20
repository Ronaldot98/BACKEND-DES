const Joi= require('joi');
const id= Joi.number().integer();
const nombre= Joi.string();
const estado= Joi.boolean();
const permisoId= Joi.number().integer();

const createRolEsquema = Joi.object({
  nombre: nombre,
  estado: estado,
  permisoId: permisoId
});

const updateRolEsquema = Joi.object({
  nombre: nombre,
  estado: estado,
  permisoId: permisoId
});

const getRolEsquema = Joi.object({
  id: id.required()
});

module.exports = {createRolEsquema,updateRolEsquema,getRolEsquema};
