import joi from 'joi';
import UserService from '../services/users.service.js';

const userService = new UserService()


const id = joi.number()
const name = joi.string().min(4) 
const last_name = joi.string().min(2)  
const password = joi.string().min(8)
const creation_date = joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).messages({'string.pattern.base':'La fecha debe tener el formato completo YYYY-MM-DD'})
const isActive = joi.bool()

const createUserSchema = joi.object({
    name: name.required(),
    last_name: last_name.required(),
    password: password.required()
})

const updateUserSchema = joi.object({
    name: name.required(),
    last_name: last_name.required(),
    password: password
})

const idUserSchema = joi.object({
    id: id.required()
    // .custom((value, helper) => {
    // const userFound = userService.users.find((item) => item.id == value)
    // if (!userFound){
    //     return helper.message('El usuario no existe')
    // }
    // return true
    // })
})

export { createUserSchema, updateUserSchema, idUserSchema }