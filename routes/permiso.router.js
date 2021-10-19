const express = require('express');

//importacion del servicio
const PermisoService = require('./../service/permiso.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');

//importacion del esquema de datos para la validacion
const { createPersimoEsquema, updatePermisoEsquema, getPermisoEsquema } = require('./../schemas/permiso.schema');

const router = express.Router();
const service = new PermisoService();

//PETICIONES
router.get('/', async (req, res, next) => {
  try {
    const permiso = await service.find();
    res.json(permiso);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getPermisoEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const permiso = await service.findOne(id);
      res.json(permiso);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createPersimoEsquema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPermiso = await service.create(body);
      res.status(201).json(newPermiso);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getPermisoEsquema, 'params'),
  validatorHandler(updatePermisoEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const permiso = await service.update(id, body);
      res.json(permiso);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getPermisoEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
)
