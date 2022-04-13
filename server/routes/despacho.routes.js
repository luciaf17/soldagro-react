module.exports = app => {
  const despacho = require('../controllers/despacho.controller.js')

  const router = require('express').Router()

  router.post('/', despacho.create)
  router.get('/', despacho.findAll)
  router.get('/:id', despacho.findOne)
  router.put('/:id', despacho.update)
  router.delete('/:id', despacho.delete)

  app.use('/api/despachos', router)
}