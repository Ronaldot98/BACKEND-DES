const express = require('express');
const ClientService = require('./../service/clientes.service');

//middlewares para validacion de datos
const validatorHandler = require('./../middlewares/validator.handler');
const {createClientEsquema,updateClientEsquema,getClientEsquema}=require('./../schemas/clientes.schema');

const router = express.Router();
const service = new ClientService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const client = await service.find();
    res.json(client);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getClientEsquema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const client = await service.findOne(id);
      res.json(client);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createClientEsquema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newClient = await service.create(body);
      res.status(201).json(newClient);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getClientEsquema, 'params'),
  validatorHandler(updateClientEsquema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const client = await service.update(id, body);
      res.json(client);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getClientEsquema, 'params'),
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
