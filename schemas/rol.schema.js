const Joi= require('joi');
const id= Joi.number().integer();
const nombre= Joi.string();
const estado= Joi.boolean();
const permisoId= Joi.number().integer();

const createRolEsquema = Joi.object({
  nombre: nombre.required(),
  permisoId: permisoId.required(),
  estado: estado
});

const updateRolEsquema = Joi.object({
  nombre: nombre,
  permisoId: permisoId,
  estado: estado

});

const getRolEsquema = Joi.object({
  id: id.required()
});

module.exports = {createRolEsquema,updateRolEsquema,getRolEsquema};
