module.exports = app => {
  const usuariorol = require('../controllers/usuarioRol.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuariorol.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuariorol.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuariorol.findOne)
  /*   router.put('/:id', usuariorol.update)
    router.delete('/:id', usuariorol.delete) */

  app.use('/api/usuarios_roles', router)
}