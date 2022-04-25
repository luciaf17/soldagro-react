module.exports = app => {
  const entrega = require('../controllers/entrega.controller.js')

  const router = require('express').Router()

  router.post('/', entrega.create)
  router.get('/', entrega.findAll)
  router.get('/:id', entrega.findOne)
  router.put('/:id', entrega.update)
  router.delete('/:id', entrega.delete)

  app.use('/api/entregas', router)
}