module.exports = app => {
  const rol = require('../controllers/rol.controller.js')

  const router = require('express').Router()

  router.post('/', rol.create)
  router.get('/', rol.findAll)
  router.get('/:id', rol.findOne)
  router.put('/:id', rol.update)
  router.delete('/:id', rol.delete)

  app.use('/api/roles', router)
}