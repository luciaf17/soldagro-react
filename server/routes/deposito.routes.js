module.exports = app => {
  const deposito = require('../controllers/deposito.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), deposito.create)
  router.get('/', deposito.findAll)
  router.get('/:id', deposito.findOne)
  router.put('/:id', deposito.update)
  router.delete('/:id', deposito.delete)

  app.use('/api/depositos', router)
}