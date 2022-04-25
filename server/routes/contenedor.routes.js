module.exports = app => {
  const contenedor = require('../controllers/contenedor.controller.js')

  const router = require('express').Router()

  router.post('/', contenedor.create)
  router.get('/', contenedor.findAll)
  router.get('/:id', contenedor.findOne)
  router.put('/:id', contenedor.update)
  router.delete('/:id', contenedor.delete)

  app.use('/api/contenedores', router)
}