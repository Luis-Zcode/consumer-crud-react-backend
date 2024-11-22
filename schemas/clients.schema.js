import joi from 'joi';


const id = joi.number()
const name = joi.string().min(4) 
const lastname = joi.string().min(2)  
const address = joi.string()
const type = joi.string()
const status = joi.bool()
const creation_date = joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).messages({'string.pattern.base':'La fecha debe tener el formato completo YYYY-MM-DD'})


const createClientSchema = joi.object({
    name: name.required(),
    lastname: lastname.required(),
    address: address.required()
})

const updateClientSchema = joi.object({
    name: name.required(),
    lastname: lastname.required(),
    address: address.required()
})

const idClientSchema = joi.object({
    id: id.required()
    // .custom((value, helper) => {
    // const ClientFound = ClientService.Clients.find((item) => item.id == value)
    // if (!ClientFound){
    //     return helper.message('El usuario no existe')
    // }
    // return true
    // })
})

export { createClientSchema, updateClientSchema, idClientSchema }