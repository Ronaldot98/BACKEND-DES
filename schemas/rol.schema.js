const Joi= require('joi');
const id= Joi.number().integer();
const nombre= Joi.string();
const estado= Joi.boolean();

const createRolEsquema = Joi.object({
  nombre: nombre.required(),

  estado: estado
});

const updateRolEsquema = Joi.object({
  id: id,
  nombre: nombre,
  estado: estado

});

const getRolEsquema = Joi.object({
  id: id.required()
});

module.exports = {createRolEsquema,updateRolEsquema,getRolEsquema};
