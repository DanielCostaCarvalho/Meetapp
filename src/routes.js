import Router from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.status(200).json({ Ola: 'amigos' });
});

export default routes;
