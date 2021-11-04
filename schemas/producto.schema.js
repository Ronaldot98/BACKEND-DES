const Joi = require('joi');
const id = Joi.number().integer();
const nombre = Joi.string();
const precio = Joi.number();
const descripcion = Joi.string();
const imagen = Joi.string().uri();
const categoria= Joi.string();
const estado = Joi.boolean();


const insertProdEsquema = Joi.object({
  nombre: nombre.required(),
  descripcion: descripcion.required(),
  precio: precio.required(),
  imagen: imagen.required(),
  categoria: categoria.required(),
  estado: estado
});

const updateProdEsquema = Joi.object({
  id: id,
  nombre: nombre,
  descripcion: descripcion,
  precio: precio,
  imagen: imagen,
  categoria:categoria,
  estado: estado
});

const getProdEsquema = Joi.object({
  id: id.required()
});

module.exports = { insertProdEsquema, updateProdEsquema, getProdEsquema };
