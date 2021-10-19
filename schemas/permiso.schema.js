const Joi = require('joi');

const id = Joi.number().integer();
const permiso1 = Joi.boolean();
const permiso2 = Joi.boolean();
const permiso3 = Joi.boolean();

const createPersimoEsquema = Joi.object({
  permiso1: permiso1.required(),
  permiso2: permiso2.required(),
  permiso3: permiso3.required()
});

const updatePermisoEsquema = Joi.object({
  permiso1: permiso1,
  permiso2: permiso2,
  permiso3: permiso3
});

const getPermisoEsquema = Joi.object({
  id: id.required()
});

module.exports = { createPersimoEsquema, updatePermisoEsquema, getPermisoEsquema }
