const Joi= require('joi');
const id= Joi.number().integer();
const productoId= Joi.number().integer();
const categoriaId= Joi.number().integer();


const createProdCategoriaEsquema = Joi.object({

  productoId:  productoId.required(),
  categoriaId:  categoriaId.required()
});

const updateProdCategoriaEsquema = Joi.object({
  productoId:  productoId,
  categoriaId:  categoriaId
});

const getProdCategoriaEsquema = Joi.object({
  id: id.required()
});

module.exports = {createProdCategoriaEsquema,updateProdCategoriaEsquema,getProdCategoriaEsquema};
