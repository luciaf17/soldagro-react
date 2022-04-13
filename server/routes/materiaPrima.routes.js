module.exports = app => {
  const materiaPrima = require('../controllers/materiaPrima.controller.js')

  const router = require('express').Router()

  router.post('/', materiaPrima.create)
  router.get('/', materiaPrima.findAll)
  router.get('/:id', materiaPrima.findOne)
  router.put('/:id', materiaPrima.update)
  router.delete('/:id', materiaPrima.delete)

  app.use('/api/materiasprimas', router)
}