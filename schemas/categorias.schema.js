const Joi= require('joi');
const id= Joi.number().integer();
const nombre= Joi.string();
const descripcion= Joi.string();
const estado = Joi.boolean();


const createCatEsquema = Joi.object({
  nombre: nombre.required(),
  descripcion: descripcion.required(),
  estado:  estado

});

const updateCatEsquema = Joi.object({
  nombre: nombre,
  descripcion: descripcion,
  estado: estado
});

const getCatEsquema = Joi.object({
  id: id.required()
});

module.exports = {createCatEsquema,updateCatEsquema,getCatEsquema};
