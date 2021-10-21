const express = require('express');
const ProveedorService= require('./../service/proveedor.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const  {insertProvEsquema,updateProvEsquema,getProvEsquema} =require('./../schemas/proveedores.schema');

const router = express.Router();
const service = new ProveedorService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const prov = await service.find();
    res.json(prov);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProvEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const prov= await service.findOne(id);
      res.json(prov);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(insertProvEsquema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProv = await service.create(body);
      res.status(201).json(newProv);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getProvEsquema, 'params'),
  validatorHandler(updateProvEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const prov = await service.update(id, body);
      res.json(prov);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getProvEsquema, 'params'),
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
