module.exports = app => {
  const usuario = require('../controllers/usuario.controller.js')

  const router = require('express').Router()

  router.post('/', usuario.create)
  router.get('/', usuario.findAll)
  router.get('/:id', usuario.findOne)
  router.put('/:id', usuario.update)
  router.delete('/:id', usuario.delete)

  app.use('/api/usuarios', router)
}