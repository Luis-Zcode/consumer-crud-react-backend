import express from 'express';
import ClientService  from '../services/clients.service.js';
import validatorHandler from '../middlewares/validator.handler.js'; 
import { createClientSchema, idClientSchema, updateClientSchema } from '../schemas/clients.schema.js';

const router = express.Router();

const clientService = new ClientService();

router.get('/', async (req, res, next) => {
  const clients = await clientService.all();
  res.status(200).json(clients);
});

router.get('/:id', validatorHandler(idClientSchema, 'params'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const userFound = await clientService.findOne(parseInt(id));
        res.status(200).json(userFound);
      } catch (error) {
        next(error)
      }
  });

router.post('/', validatorHandler(createClientSchema, 'body'), async (req, res, next) => {
  try {
    let newClient = await clientService.create(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    next(error);
  }

  router.put('/:id', validatorHandler(idClientSchema, 'params'), validatorHandler(updateClientSchema, 'body'), 
  async (req, res, next) => {
    try {
      const { id } = req.params;
      let clientUpdate = await clientService.update(id, req.body);
      res.status(200).json(clientUpdate);
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:id', validatorHandler(idClientSchema, 'params'), async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteClient = await clientService.delete(id);
      if(deleteClient){
        res
        .status(200)
        .json({ message: 'Se ha elimido con exito', data: deleteClient });
      }
    } catch (error) {
      next(error);
    }
  });
});

export default router;
