module.exports = app => {
  const usuario = require('../controllers/usuario.controller.js')
  const multer = require('multer')
  const upload = multer()
  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuario.create)
  router.get('/', usuario.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, usuario.findOne)
  router.put('/:id', upload.none(), middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuario.update)
  router.delete('/:id', upload.none(), middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuario.delete)

  app.use('/api/usuarios', router)
}