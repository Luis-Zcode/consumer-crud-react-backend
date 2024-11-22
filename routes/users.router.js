import express from 'express';
import UserService from '../services/users.service.js';
import { createUserSchema, idUserSchema, updateUserSchema } from '../schemas/users.schema.js';
import validatorHandler from '../middlewares/validator.handler.js';

const router = express.Router();

const userService = new UserService()

router.get('/', async (req, res, next) => {
  try {
    const users = await userService.all();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  };
});

router.get('/:id', 
  validatorHandler(idUserSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const userFound = await userService.findOne(parseInt(id));
    res.status(200).json(userFound);
  } catch (error) {
    next(error)
  }
})

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
  try {
    let newUser = await userService.create(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
});

router.put('/:id',
    validatorHandler(idUserSchema, 'params'), 
    validatorHandler(updateUserSchema, 'body'),
    async (req, res, next) => {
    try {
      const { id } = req.params;
      let userUpdate = await userService.update(id, req.body)
      res.status(200).json(userUpdate)
    } catch (error) {
      next(error)
    }
});

router.delete('/:id', 
    validatorHandler(idUserSchema, 'params'), 
    async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteUser = await userService.delete(parseInt(id));
      res.status(200).json({message: "Se ha elimido con exito", data: deleteUser })
    } catch (error) {
      next(error)
    }
});

// router.patch('/:id', async(req, res) => {

// });

export default router