module.exports = app => {
  const pedido = require('../controllers/pedido.controller.js')


  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, pedido.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, pedido.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, pedido.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, pedido.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, pedido.delete)

  app.use('/api/pedidos', router)
}