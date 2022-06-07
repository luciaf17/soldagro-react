module.exports = app => {
  const pedido = require('../controllers/pedido.controller.js')
  const multer = require('multer')
  const upload = multer()


  const router = require('express').Router()

  router.post('/', upload.none(), pedido.create)
  router.get('/', pedido.findAll)
  router.get('/:id', pedido.findOne)
  router.put('/:id', pedido.update)
  router.delete('/:id', pedido.delete)

  app.use('/api/pedidos', router)
}