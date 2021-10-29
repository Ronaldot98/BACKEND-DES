const Joi= require('joi');
const id= Joi.number().integer();
const fecha= Joi.date();
const ClientId= Joi.number().integer();
const DireId= Joi.number().integer();


const createOrderComEsquema = Joi.object({
  fecha: fecha.required(),
  ClientId: ClientId.required(),
  DireId:  DireId.required()

});

const updateOrderComEsquema = Joi.object({
  id: id,
  fecha: fecha,
  ClientId: ClientId,
  DireId: DireId
});

const getOrderComEsquema = Joi.object({
  id: id.required()
});

module.exports = {createOrderComEsquema,updateOrderComEsquema,getOrderComEsquema};
