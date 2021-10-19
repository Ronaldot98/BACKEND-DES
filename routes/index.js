//archivo para configurar las rutas
const express = require('express');
const permisoRouter = require('./permiso.router');

function routerApi(){
const router= express.Router();
app.use('/metasports.com');
router('/permiso',permisoRouter);
}


module.exports = routerApi;
