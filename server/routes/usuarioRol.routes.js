module.exports = app => {
  const usuariorol = require('../controllers/usuarioRol.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), usuariorol.create)
  router.get('/', usuariorol.findAll)
  router.get('/:id', usuariorol.findOne)
  /*   router.put('/:id', usuariorol.update)
    router.delete('/:id', usuariorol.delete) */

  app.use('/api/usuarios_roles', router)
}