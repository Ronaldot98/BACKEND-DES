

const express = require('express');
const productoCategService = require('./../service/productoCategoria.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const  {createProdCategoriaEsquema,updateProdCategoriaEsquema,getProdCategoriaEsquema} =require('./../schemas/productoCategoria.schema');

const router = express.Router();
const service = new productoCategService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const orderProdCat = await service.find();
    res.json(orderProdCat);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProdCategoriaEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const orderProdCat = await service.findOne(id);
      res.json(orderProdCat);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
validatorHandler(createProdCategoriaEsquema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const orderProdCat = await service.create(body);
      res.status(201).json(orderProdCat);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getProdCategoriaEsquema, 'params'),
  validatorHandler(updateProdCategoriaEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const orderProdCat = await service.update(id, body);
      res.json(orderProdCat);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getProdCategoriaEsquema, 'params'),
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
