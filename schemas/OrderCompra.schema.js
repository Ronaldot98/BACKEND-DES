const Joi= require('joi');
const id= Joi.number().integer();
const fecha= Joi.date();
const DireId= Joi.number().integer();


const createOrderComEsquema = Joi.object({
  fecha: fecha.required(),

  DireId:  DireId.required()

});

const updateOrderComEsquema = Joi.object({
  id: id,
  fecha: fecha,
  DireId: DireId
});

const getOrderComEsquema = Joi.object({
  id: id.required()
});

module.exports = {createOrderComEsquema,updateOrderComEsquema,getOrderComEsquema};
