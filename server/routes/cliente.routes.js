module.exports = app => {
  const cliente = require('../controllers/cliente.controller.js')
  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, cliente.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, cliente.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, cliente.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, cliente.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, cliente.delete)

  app.use('/api/clientes', router)
}