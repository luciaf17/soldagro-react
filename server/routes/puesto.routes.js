module.exports = app => {
  const puesto = require('../controllers/puesto.controller.js')

  const router = require('express').Router()

  router.post('/', puesto.create)
  router.get('/', puesto.findAll)
  router.get('/:id', puesto.findOne)
  router.put('/:id', puesto.update)
  router.delete('/:id', puesto.delete)

  app.use('/api/puestos', router)
}