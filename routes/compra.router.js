

const express = require('express');
const CompraService = require('./../service/compras.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const {createCompEsquema,updateCompEsquema,getCompEsquema}=require('./../schemas/compra.schema');

const router = express.Router();
const service = new CompraService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const comp = await service.find();
    res.json(comp);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCompEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const comp = await service.findOne(id);
      res.json(comp);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newComp = await service.create(body);
      res.status(201).json(newComp);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const comp = await service.update(id, body);
      res.json(comp);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getCompEsquema, 'params'),
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
