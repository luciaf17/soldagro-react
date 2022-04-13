module.exports = app => {
  const nombrePuesto = require('../controllers/nombrePuesto.controller.js')

  const router = require('express').Router()

  router.post('/', nombrePuesto.create)
  router.get('/', nombrePuesto.findAll)
  router.get('/:id', nombrePuesto.findOne)
  router.put('/:id', nombrePuesto.update)
  router.delete('/:id', nombrePuesto.delete)

  app.use('/api/nombrespuestos', router)
}