//sequelize tiene una instancia para validar los errores lo importamos
const {ValidationError}= require('sequelize');
const {boom} = require('@hapi/boom');

//midalware que captura errores
function logErrors (err,req,res,next){
  console.log('LogErrors');
   console.log(err);
   //ejecutando un midalware de tipo error
   next(err);
}

//detectar un errror crea un formato para devolver al cliente
function errorHandler(err,req,res,next) {
  console.log('ErrorHandler');
      res.status(500).json(
        {
          message:err.message,
          //donde ocurrio el error
          stack: err.stack
        }
        )
}

//error de tpo boom- nos permite retornar los errores al momento de hacer las peticiones
function boomErrorHandler(err,req,res,next) {
  if (err.isBoom) {
    const {output} =err;
    res.status(output.statusCode).json(output.payload);
  }
  else {
    next(err);
  }

}

//capturar error de la estructura de ORM
function ormErrorHandler(err,req,res,next){
  //validar si el error es de tipo de sequilaze
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode:409,
      message: err.name,
      errors: err.errors
    })
  }
  next(err);
}

module.exports = {logErrors,errorHandler,boomErrorHandler,ormErrorHandler}
