import UsersRouter from './users.router.js'
import ClientsRouter from './clients.router.js'
import NotaService  from './notas.router.js';

const RouterApi = (app) => {
  app.use('/users', UsersRouter)
  app.use('/clients', ClientsRouter)
  app.use('/notas', NotaService)
};

export default RouterApi;
