import express from 'express';
import NotaService from '../services/notas.service.js';
import validatorHandler from '../middlewares/validator.handler.js';
import { createNotaSchema, idNotaSchema, updateNotaSchema } from '../schemas/notas.schema.js';
const router = express.Router();

const notaService = new NotaService();

router.get('/', async (req, res, next) => {
  try {
    const notas = await notaService.allNotas();
    res.status(200).json(notas);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id', validatorHandler(idNotaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const nota = await notaService.findNota(parseInt(id));
      res.status(200).json(nota);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',validatorHandler(createNotaSchema, 'body'), async (req, res, next) => {
    try {
      let newNota = await notaService.store(req.body);
      res.status(201).json(newNota);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  validatorHandler(idNotaSchema, 'params'),
  validatorHandler(updateNotaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      let notaUpdate = await notaService.update(parseInt(id), req.body);
      res.status(200).json(notaUpdate);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',validatorHandler(idNotaSchema, 'params'),
   async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteNota = await notaService.delete(parseInt(id));
      res
        .status(200)
        .json({ message: 'Se ha elimido con exito', data: deleteNota });
    } catch (error) {
      next(error);
    }
  }
);

// router.patch('/:id', async(req, res) => {

// });

export default router;
