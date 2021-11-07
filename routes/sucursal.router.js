const express = require('express');
const SucursalService = require('./../service/sucursales.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const  {insertSucurEsquema,updateSucurEsquema,getSucurEsquema} = require('./../schemas/sucursal.schema');


const router = express.Router();
const service = new SucursalService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const sucur = await service.find();
    res.json(sucur);
  } catch (error) {
    next(error);
  }
});

router.get('/sucurIna',
 async (req, res, next) => {
  try {
    const sucur = await service.findInactivos();
    res.json(sucur);
  } catch (error) {
    next(error);
  }
});


router.get('/:id',
validatorHandler(getSucurEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const sucur= await service.findOne(id);
      res.json(sucur);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
validatorHandler(insertSucurEsquema, 'body'),
async (req, res, next) => {
    try {
      const body = req.body;
      const newSucur= await service.create(body);
      res.status(201).json(newSucur);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
validatorHandler(getSucurEsquema, 'params'),
validatorHandler(updateSucurEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const sucur = await service.update(id, body);
      res.json(sucur);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',

validatorHandler(getSucurEsquema, 'params'),

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
