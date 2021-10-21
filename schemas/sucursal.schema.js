const Joi= require('joi');

const id= Joi.number().integer();
const nombre= Joi.string();
const telefono= Joi.string();
const correo= Joi.string().email();
const direId= Joi.number().integer();
const estado= Joi.boolean();


const insertSucurEsquema = Joi.object({
  nombre: nombre.required(),
  telefono: telefono.required(),
  correo: correo.required(),
  direId: direId.required(),
  estado: estado
});

const updateSucurEsquema = Joi.object({
  nombre: nombre,
  telefono: telefono,
  correo: correo,
  direId: direId,
  estado: estado
});

const getSucurEsquema = Joi.object({
  id: id.required()
});

module.exports = {insertSucurEsquema,updateSucurEsquema,getSucurEsquema};
