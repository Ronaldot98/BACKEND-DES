

const express = require('express');
const OrdenCompraService = require('./../service/OrdenCompra.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const {createOrderComEsquema,updateOrderComEsquema,getOrderComEsquema}=require('./../schemas/OrderCompra.schema');

const router = express.Router();
const service = new OrdenCompraService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const order = await service.find();
    res.json(order);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getOrderComEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  });

router.post('/',

  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getOrderComEsquema, 'params'),
  validatorHandler(updateOrderComEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const order = await service.update(id, body);
      res.json(order);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getOrderComEsquema, 'params'),
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
