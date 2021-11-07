const Joi= require('joi');
const id= Joi.number().integer();
const cantidad= Joi.number().integer();
const fecha= Joi.string();
const precio = Joi.number().integer();
const prodId= Joi.number().integer();
const provId= Joi.number().integer();


const createCompEsquema = Joi.object({
  cantidad: cantidad.required(),
  fecha: fecha.required(),
  precio: precio.required(),
  prodId: prodId.required(),
  provId: provId.required()
});

const updateCompEsquema = Joi.object({
  id: id,
  cantidad: cantidad,
  fecha: fecha,
  precio: precio,
  prodId: prodId,
  provId: provId
});

const getCompEsquema = Joi.object({
  id: id.required()
});

module.exports = {createCompEsquema,updateCompEsquema,getCompEsquema};
