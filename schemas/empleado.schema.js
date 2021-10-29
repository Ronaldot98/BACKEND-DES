const Joi= require('joi');
const id= Joi.number().integer();
const primer_nombre= Joi.string();
const segundo_nombre= Joi.string();
const primer_apellido= Joi.string();
const segundo_apellido= Joi.string();
const f_nacimiento = Joi.date();
const genero=Joi.string();
const direcId= Joi.number().integer();
const sucurId= Joi.number().integer();
const estado = Joi.boolean();


const createEmpEsquema = Joi.object({
  primer_nombre: primer_nombre.required(),
  segundo_nombre: segundo_nombre.required(),
  primer_apellido: primer_apellido.required(),
  segundo_apellido: segundo_apellido.required(),
  genero: genero.required(),
  f_nacimiento: f_nacimiento.required(),
  direcId: direcId.required(),
  sucurId: sucurId.required(),
  estado: estado
});

const updateEmpEsquema = Joi.object({
  id: id,
  primer_nombre: primer_nombre,
  segundo_nombre: segundo_nombre,
  primer_apellido: primer_apellido,
  segundo_apellido: segundo_apellido,
  genero: genero,
  f_nacimiento: f_nacimiento,
  direcId: direcId,
  sucurId: sucurId,
  estado: estado
});

const getEmpEsquema = Joi.object({
  id: id.required()
});

module.exports = {createEmpEsquema,updateEmpEsquema,getEmpEsquema};
