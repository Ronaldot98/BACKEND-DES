const Joi= require('joi');
const id= Joi.number().integer();
const nombre= Joi.string();
const apellido= Joi.string();
const correo= Joi.string().email();
const telefono= Joi.string();
const password= Joi.string().min(8);

const createClientEsquema = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.required(),
  correo: correo.required(),
  telefono: telefono.required(),
  password: password.required()
});

const updateClientEsquema = Joi.object({
  id: id,
  nombre: nombre,
  apellido: apellido,
  correo: correo,
  telefono: telefono,
  password: password
});

const getClientEsquema = Joi.object({
  id: id.required()
});

module.exports = {createClientEsquema,updateClientEsquema,getClientEsquema};
