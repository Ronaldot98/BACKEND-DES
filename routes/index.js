//archivo para configurar las rutas
const express = require('express');
const permisoRouter = require('./permiso.router');

function routerApi(app){

const router= express.Router();
app.use('/metasports.com',router);
router.use('/permiso',permisoRouter);
}


module.exports = routerApi;
