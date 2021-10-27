const Joi = require('joi');
const id = Joi.number().integer();
const nombre = Joi.string();
const precio = Joi.number();
const descripcion = Joi.string();
const imagen = Joi.string().uri();
const estado = Joi.boolean();

const insertProdEsquema = Joi.object({
  nombre: nombre.required(),
  precio: precio.required(),
  descripcion: descripcion.required(),
  imagen: imagen.required(),
  estado: estado
});

const updateProdEsquema = Joi.object({
  nombre: nombre,
  precio: precio,
  descripcion: descripcion,
  imagen: imagen,
  estado: estado
});

const getProdEsquema = Joi.object({
  id: id.required()
});

module.exports = { insertProdEsquema, updateProdEsquema, getProdEsquema };
