

const express = require('express');
const OrdenProductoService = require('./../service/OrdenProducto.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const  {createOrderProdEsquema,updateOrderProdEsquema,getOrderProdEsquema}=require('./../schemas/OrdenProducto.schema');

const router = express.Router();
const service = new OrdenProductoService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const orderProd = await service.find();
    res.json(orderProd);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getOrderProdEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const orderProd = await service.findOne(id);
      res.json(orderProd);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
validatorHandler(createOrderProdEsquema, 'body'),
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
  validatorHandler(getOrderProdEsquema, 'params'),
  validatorHandler(updateOrderProdEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const orderProd = await service.update(id, body);
      res.json(orderProd);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getOrderProdEsquema, 'params'),
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
