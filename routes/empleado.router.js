const express = require('express');
const EmpleadoService = require('./../service/empleado.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const {createEmpEsquema,updateEmpEsquema,getEmpEsquema}=require('./../schemas/empleado.schema');

const router = express.Router();
const service = new EmpleadoService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const rol = await service.find();
    res.json(rol);
  } catch (error) {
    next(error);
  }
});

router.get('/empleadoIna',
 async (req, res, next) => {
  try {
    const emp = await service.findInactivos();
    res.json(emp);
  } catch (error) {
    next(error);
  }
});


router.get('/:id',
  validatorHandler(getEmpEsquema, 'params'),
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
  validatorHandler(createEmpEsquema, 'body'),
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
  validatorHandler(getEmpEsquema, 'params'),
  validatorHandler(updateEmpEsquema, 'body'),
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
  validatorHandler(getEmpEsquema, 'params'),
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
