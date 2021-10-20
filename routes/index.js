//archivo para configurar las rutas
const express = require('express');
const permisoRouter = require('./permiso.router');
const rolRouter = require('./rol.router');
const userRouter= require('./usuario.router');
const EmpRouter= require('./empleado.router');
const CatRouter= require('./categorias.router');
const ClientRouter= require('./clientes.router');


function routerApi(app){

const router= express.Router();
app.use('/metasports.com',router);
router.use('/permiso',permisoRouter);
router.use('/rol',rolRouter);
router.use('/user',userRouter);
router.use('/emp',EmpRouter);
router.use('/categoria',CatRouter);
router.use('/cliente',ClientRouter);

}


module.exports = routerApi;
