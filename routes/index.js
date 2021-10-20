//archivo para configurar las rutas
const express = require('express');
const permisoRouter = require('./permiso.router');
const rolRouter = require('./rol.router');
const userRouter= require('./user.router');
const EmpRouter= require('./empleado.router');

function routerApi(app){

const router= express.Router();
app.use('/metasports.com',router);
router.use('/permiso',permisoRouter);
router.use('/rol',rolRouter);
router.use('/user',userRouter);
router.use('/emp',EmpRouter);
}


module.exports = routerApi;
