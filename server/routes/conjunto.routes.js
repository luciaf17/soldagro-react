module.exports = app => {
  const conjunto = require('../controllers/conjunto.controller.js')

  const router = require('express').Router()

  router.post('/', conjunto.create)
  router.get('/', conjunto.findAll)
  router.get('/:id', conjunto.findOne)
  router.put('/:id', conjunto.update)
  router.delete('/:id', conjunto.delete)

  app.use('/api/conjuntos', router)
}