module.exports = app => {
  const cliente = require('../controllers/cliente.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), cliente.create)
  router.get('/', cliente.findAll)
  router.get('/:id', cliente.findOne)
  router.put('/:id', cliente.update)
  router.delete('/:id', cliente.delete)

  app.use('/api/clientes', router)
}