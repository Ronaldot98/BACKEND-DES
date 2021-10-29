const Joi= require('joi');
const id= Joi.number().integer();
const nombre= Joi.string();
const rubro= Joi.string();
const correo= Joi.string().email();
const telefono= Joi.string();
const direId= Joi.number().integer();
const estado= Joi.boolean();

const insertProvEsquema = Joi.object({
  nombre: nombre.required(),
  rubro: rubro.required(),
  correo: correo.required(),
  telefono: telefono.required(),
  direId: direId.required(),
  estado: estado

});

const updateProvEsquema = Joi.object({
  id: id,
  nombre: nombre,
  rubro: rubro,
  correo: correo,
  telefono: telefono,
  direId: direId,
  estado: estado

});

const getProvEsquema = Joi.object({
  id: id.required()
});

module.exports = {insertProvEsquema,updateProvEsquema,getProvEsquema};
