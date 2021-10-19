const boom = require('@hapi/boom');
//midalware que recibe el esquema y la propiedad
// crear midalware de forma dinamica
function validatorHandler(schema,property) {
  //retorna un midalware
  return ( req, res,next ) => {

        //la informacion de un req puede venir en varios lugares
        const data=req[property];
        //enviar la informacion que queremos validar
        const {error}=schema.validate(data,{abortEarly:false});

        if (error){
          //el request se  hizo de forma incorrecta
          next(boom.badRequest(error));
        }
        next();
  }
}


module.exports = validatorHandler;
