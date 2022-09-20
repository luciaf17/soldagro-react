module.exports = app => {
  const pedidopieza = require('../controllers/pedidoPieza.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, pedidopieza.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, pedidopieza.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, pedidopieza.findOne)
  /*   router.put('/:id', pedidopieza.update)
    router.delete('/:id', pedidopieza.delete) */

  app.use('/api/pedidos_piezas', router)
}