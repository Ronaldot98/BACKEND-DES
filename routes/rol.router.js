const express = require('express');

//importacion del servicio
const RolService = require('./../service/roles.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');

//importacion del esquema de datos para la validacion
const { createRolEsquema,getRolEsquema, updateRolEsquema } = require('./../schemas/rol.schema');

const router = express.Router();
const service = new RolService();

//PETICIONES
router.get('/', async (req, res, next) => {
  try {
    const rol = await service.find();
    res.json(rol);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getRolEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rol = await service.findOne(id);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createRolEsquema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRol = await service.create(body);
      res.status(201).json(newRol);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getRolEsquema, 'params'),
  validatorHandler(updateRolEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const rol = await service.update(id, body);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getRolEsquema, 'params'),
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

module.exports = router;
