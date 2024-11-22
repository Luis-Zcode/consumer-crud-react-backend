import { notFound } from '@hapi/boom';
import db from '../models/index.js';

const { Client } = db;

class ClientService {

  async all() {
    const clients = await Client.findAll();
    return clients;
  }

  async findOne(id) {
    const client = await Client.findByPk(id);
    if (!client) {
      throw notFound('Client Not Found');
    }
    return client;
  }

  async create(data) {
    try {
      const client = await Client.create({
        ...data,
        type: 'Corporativo',
        status: true,
      });
      return client;
    } catch (error) {
      throw e;
    }
  }

  async update(id, { name, lastname, address }) {
    try {
      const client = await Client.findByPk(id);
      client.name = name;
      client.lastname = lastname;
      client.address = address;
      client.save();
      return client;
    } catch (error) {
      return error
    }
  }

  async delete(id) {
    const client = await Client.findByPk(id)
    client.destroy()
    return client
  } 
}

export default ClientService