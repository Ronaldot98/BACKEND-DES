const Joi= require('joi');
const id= Joi.number().integer();
const departamento= Joi.string();
const municipio= Joi.string();
const descripcion = Joi.string();

const createDireEsquema = Joi.object({
  departamento: departamento.required(),
  municipio: municipio.required(),
  descripcion: descripcion.required()
});

const updateDireEsquema = Joi.object({
  departamento: departamento,
  municipio: municipio,
  descripcion: descripcion
});

const getDireEsquema = Joi.object({
  id: id.required()
});

module.exports = {createDireEsquema,updateDireEsquema,getDireEsquema};
