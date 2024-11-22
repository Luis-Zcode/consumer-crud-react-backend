import { notFound } from '@hapi/boom';
import db from '../models/index.js';
const { Notas, User } = db;
export default class NotaService {
  async allNotas() {
    return await Notas.findAll({
      attributes: { exclude: ['UserId'] },
      include: [
        {
          model: User,
          attributes: {
            exclude: ['UserId', 'password', 'status', 'createdAt', 'updatedAt'],
          },
        },
      ],
    });
    return allNotas;
  }

  async findNota(id) {
    const nota = await Notas.findByPk(id, {
      attributes: { exclude: ['UserId'] },
      include: [
        {
          model: User,
        },
      ],
    });
    return nota;
  }

  async store(data) {
    const user = await User.findByPk(data.userID)
    if(!user){
        throw notFound('User not Found')
    }
    const nota = await Notas.create({
        nota: data.nota,
        UserId: user.id
    })
    return nota
  }

  async update(idNota, data) {
    const user = await User.findByPk(data.userID)
    if(!user){
      throw notFound('User not Found')
    }
    const nota = await Notas.findByPk(idNota)
    if(!nota){
      throw notFound('Nota not Found')
    }
    nota.nota = data.nota
    nota.UserId = user.id
    await nota.save()

    return nota
  }

  async delete (id){
    const nota = await Notas.findByPk(id)
    if(!nota){
      throw notFound('Nota not Found')
    }
    await nota.destroy()
    return nota
  }
}
