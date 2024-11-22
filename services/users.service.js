import { notFound } from '@hapi/boom';
import db from '../models/index.js';

const { User } = db;

class UserService {

  async all() {
    const users = await User.findAll();
    return users;
  }

  async findOne(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw notFound('User Not Found');
    }
    return user;
  }

  async create(data) {
    try {
      const user = await User.create({
        ...data,
        status: true,
      });
      return user;
    } catch (error) {
      throw e;
    }
  }

  async update(id, { name, last_name, password }) {
    try {
      const user = await User.findByPk(id);
      user.name = name;
      user.last_name = last_name;
      user.password = password ? password : user.password;
      user.save();
      return user;
    } catch (error) {
      return error
    }
  }

  async delete(id) {
      const user = await User.findByPk(id);
      user.destroy()
      return user
  }
}

export default UserService;
