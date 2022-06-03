module.exports = app => {
  const usuario = require('../controllers/usuario.controller.js')
  const multer = require('multer')
  const upload = multer()
  const router = require('express').Router()
  const middleware = require('../utils/middleware')

  router.post('/', upload.none(), middleware.tokenExtractor, middleware.userExtractor, usuario.create)
  router.get('/', usuario.findAll)
  router.get('/:id', usuario.findOne)
  router.put('/:id', usuario.update)
  router.delete('/:id', usuario.delete)

  app.use('/api/usuarios', router)
}