module.exports = app => {
  const insumo = require('../controllers/insumo.controller.js')

  const router = require('express').Router()

  router.post('/', insumo.create)
  router.get('/', insumo.findAll)
  router.get('/:id', insumo.findOne)
  router.put('/:id', insumo.update)
  router.delete('/:id', insumo.delete)

  app.use('/api/insumos', router)
}