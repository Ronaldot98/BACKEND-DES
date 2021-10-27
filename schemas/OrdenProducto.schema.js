const Joi= require('joi');
const id= Joi.number().integer();
const cantidad= Joi.number();
const subtodal= Joi.number();
const productoId= Joi.number().integer();
const ordenId= Joi.number().integer();


const createOrderProdEsquema = Joi.object({
  cantidad: cantidad.required(),
  subtodal: subtodal.required(),
  productoId:  productoId.required(),
  ordenId:  ordenId.required()
});

const updateOrderProdEsquema = Joi.object({
  cantidad: cantidad,
  subtodal: subtodal,
  productoId:  productoId,
  ordenId:  ordenId
});

const getOrderProdEsquema = Joi.object({
  id: id.required()
});

module.exports = {createOrderProdEsquema,updateOrderProdEsquema,getOrderProdEsquema};
