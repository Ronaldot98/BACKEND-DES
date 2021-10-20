

const express = require('express');
const CatService = require('./../service/categorias.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const {createCatEsquema,updateCatEsquema,getCatEsquema}=require('./../schemas/categorias.schema');

const router = express.Router();
const service = new CatService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const cat = await service.find();
    res.json(cat);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCatEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const cat = await service.findOne(id);
      res.json(cat);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createCatEsquema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCat = await service.create(body);
      res.status(201).json(newCat);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getCatEsquema, 'params'),
  validatorHandler(updateCatEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const cat = await service.update(id, body);
      res.json(cat);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getCatEsquema, 'params'),
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
