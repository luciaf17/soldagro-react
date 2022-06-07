module.exports = app => {
  const contenedor = require('../controllers/contenedor.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), contenedor.create)
  router.get('/', contenedor.findAll)
  router.get('/:id', contenedor.findOne)
  router.put('/:id', contenedor.update)
  router.delete('/:id', contenedor.delete)

  app.use('/api/contenedores', router)
}