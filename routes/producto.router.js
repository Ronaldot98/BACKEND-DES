const express = require('express');
const ProductoService= require('./../service/producto.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const  {insertProdEsquema,updateProdEsquema,getProdEsquema} =require('./../schemas/producto.schema');

const router = express.Router();
const service = new ProductoService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const prod = await service.find();
    res.json(prod);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProdEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const prod= await service.findOne(id);
      res.json(prod);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(insertProdEsquema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProd = await service.create(body);
      res.status(201).json(newProd);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getProdEsquema, 'params'),
  validatorHandler(updateProdEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const prod= await service.update(id, body);
      res.json(prod);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getProdEsquema, 'params'),
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
