const express = require('express');
const DireccionService = require('./../service/direccion.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const {createDireEsquema,updateDireEsquema,getDireEsquema}=require('./../schemas/empleado.schema');

const router = express.Router();
const service = new DireccionService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const dire= await service.find();
    res.json(dire);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getDireEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const dire = await service.findOne(id);
      res.json(dire);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createDireEsquema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newDire= await service.create(body);
      res.status(201).json(newDire);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getDireEsquema, 'params'),
  validatorHandler(updateDireEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const dire = await service.update(id, body);
      res.json(dire);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getDireEsquema, 'params'),
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
