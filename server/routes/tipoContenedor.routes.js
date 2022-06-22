module.exports = app => {
  const tipoContenedor = require('../controllers/tipoContenedor.controller')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), tipoContenedor.create)
  router.get('/', tipoContenedor.findAll)
  router.get('/:id', tipoContenedor.findOne)
  router.put('/:id', tipoContenedor.update)
  router.delete('/:id', tipoContenedor.delete)

  app.use('/api/tiposcontenedores', router)
}