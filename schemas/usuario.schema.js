const Joi= require('joi');
const id= Joi.number().integer();
const usuario= Joi.string();
const password= Joi.string().min(8);
const sesion= Joi.boolean();
const estado= Joi.boolean();
const rolId= Joi.number().integer();

const createUserEsquema = Joi.object({
  usuario: usuario.required(),
  password: password.required(),
  permisoId: rolId.required()
});

const updateUserEsquema = Joi.object({
  usuario: usuario,
  password: password,
  sesion: sesion,
  estado: estado,
  rolId: rolId
});

const getUserEsquema = Joi.object({
  id: id.required()
});

module.exports = {createUserEsquema,updateUserEsquema,getUserEsquema};
