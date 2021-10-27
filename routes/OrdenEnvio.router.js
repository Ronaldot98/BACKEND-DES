

const express = require('express');
const OrdenEnvioService = require('../service/OrdenEnvio.service');

//middlewares para validacion de datos
const validatorHandler = require('../middlewares/validator.handler');
const {createOrderEnviEsquema,updateOrderEnviEsquema,getOrderEnviEsquema} =require('./../schemas/OrdenEnvio.schema');

const router = express.Router();
const service = new OrdenEnvioService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const orderEnvio = await service.find();
    res.json(orderEnvio);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getOrderEnviEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const orderEnvio = await service.findOne(id);
      res.json(orderEnvio);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
validatorHandler(createOrderEnviEsquema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrderEnvio = await service.create(body);
      res.status(201).json(newOrderEnvio);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getOrderEnviEsquema, 'params'),
  validatorHandler(updateOrderEnviEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const orderEnvio = await service.update(id, body);
      res.json(orderEnvio);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getOrderEnviEsquema, 'params'),
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
