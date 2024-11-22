import joi from 'joi';

const id = joi.number()
const nota = joi.number().max(100).min(0)
const userID = joi.number()


const createNotaSchema = joi.object({
    nota: nota.required(),
    userID: userID.required(),
})

const updateNotaSchema = joi.object({
    nota: nota.required(),
    userID: userID.required(),
})

const idNotaSchema = joi.object({
    id: id.required()
    // .custom((value, helper) => {
    // const ClientFound = ClientService.Clients.find((item) => item.id == value)
    // if (!ClientFound){
    //     return helper.message('El usuario no existe')
    // }
    // return true
    // })
})

export { createNotaSchema, updateNotaSchema, idNotaSchema }