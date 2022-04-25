module.exports = app => {
  const subconjunto = require('../controllers/subconjunto.controller.js')

  const router = require('express').Router()

  router.post('/', subconjunto.create)
  router.get('/', subconjunto.findAll)
  router.get('/:id', subconjunto.findOne)
  router.put('/:id', subconjunto.update)
  router.delete('/:id', subconjunto.delete)

  app.use('/api/subconjuntos', router)
}