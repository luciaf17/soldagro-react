module.exports = app => {
  const pedido = require('../controllers/pedido.controller.js')

  const router = require('express').Router()

  router.post('/', pedido.create)
  router.get('/', pedido.findAll)
  router.get('/:id', pedido.findOne)
  router.put('/:id', pedido.update)
  router.delete('/:id', pedido.delete)

  app.use('/api/pedidos', router)
}