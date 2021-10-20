const Joi= require('joi');
const id= Joi.number().integer();
const usuario= Joi.string();
const password= Joi.string().min(8);
const sesion= Joi.boolean();
const estado= Joi.boolean();
const rolId= Joi.number().integer();
const empId= Joi.number().integer();

const createUserEsquema = Joi.object({
  usuario: usuario.required(),
  password: password.required(),
  rolId: rolId.required(),
  empId: empId.required(),
  sesion: sesion,
  estado: estado

});

const updateUserEsquema = Joi.object({
  usuario: usuario,
  password: password,
  rolId: rolId,
  empId: empId,
  sesion: sesion,
  estado: estado,

});

const getUserEsquema = Joi.object({
  id: id.required()
});

module.exports = {createUserEsquema,updateUserEsquema,getUserEsquema};
