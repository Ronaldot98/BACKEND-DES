const Joi= require('joi');
const id= Joi.number().integer();
const observaciones= Joi.string();
const Idcompra= Joi.number().integer();
const Idempleado= Joi.number().integer();
const estado= Joi.boolean();


const createOrderEnviEsquema = Joi.object({
  observaciones: observaciones.required(),
  Idcompra: Idcompra.required(),
  Idempleado:  Idempleado.required(),
  estado: estado

});

const updateOrderEnviEsquema = Joi.object({
  observaciones: observaciones,
  Idcompra: Idcompra,
  Idempleado:  Idempleado,
  estado: estado
});

const getOrderEnviEsquema = Joi.object({
  id: id.required()
});

module.exports = {createOrderEnviEsquema,updateOrderEnviEsquema,getOrderEnviEsquema};
