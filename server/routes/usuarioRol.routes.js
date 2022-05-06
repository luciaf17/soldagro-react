module.exports = app => {
  const usuariorol = require('../controllers/usuarioRol.controller.js')

  const router = require('express').Router()

  router.post('/', usuariorol.create)
  router.get('/', usuariorol.findAll)
  router.get('/:id', usuariorol.findOne)
  /*   router.put('/:id', usuariorol.update)
    router.delete('/:id', usuariorol.delete) */

  app.use('/api/usuarios_roles', router)
}