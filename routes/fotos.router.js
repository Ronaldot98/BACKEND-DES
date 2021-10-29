const express = require('express');
formidable = require("formidable");
path = require("path");
fs = require("fs");
const FotosService = require('./../service/fotos.service');

DIRECTORIO_FOTOS = path.join(__dirname, "fotos_productos");
DIRECTORIO_DIST = path.join(__dirname, "dist");


const router = express.Router();
const service = new FotosService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const rol = await service.find();
    res.json(rol);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rol = await service.findOne(id);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  });

router.post('/',

  async (req, res, next) => {
    try {
      const body = req.body;
      const newRol = await service.create(body);
      res.status(201).json(newRol);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const rol = await service.update(id, body);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
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

